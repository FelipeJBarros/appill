import React, { createContext, useState } from "react";
import api from '../api';

interface DoseContextData {
  dose: object;
  getDose(id: string): Promise<{ error: boolean; errorMessage?: string }>;
  uploadDose(values: object): Promise<{ error: boolean; errorMessage?: string }>;
}

interface DoseProviderProps {
  children: React.ReactNode;
}

const DoseContext = createContext<DoseContextData>({} as DoseContextData);

export function DoseProvider({ children }: DoseProviderProps) {
  const [dose, setDose] = useState({});

  async function getDose(id: string) {
    try {
      const response = await api.get("/doses/alarm", { params: { id } });
      setDose(response.data);
      console.log("dose", response.data);
      return { error: false };
    } catch (error: any) {
      if (error.response.data.statusCode === 500) {
        return { error: true, errorMessage: "Erro inesperado, tente novamente mais tarde" };
      }
      return { error: true, errorMessage: error.response.data.message };
    }
  }

  async function uploadDose(values:object) {
    try {
        const response = await api.patch("/doses", { params: { values} });
        setDose(response.data);
        console.log("dose", response.data);
        return { error: false };
      } catch (error: any) {
        if (error.response.data.statusCode === 500) {
          return { error: true, errorMessage: "Erro inesperado, tente novamente mais tarde" };
        }
        return { error: true, errorMessage: error.response.data.message };
      }
  }

  return (
    <DoseContext.Provider
        value={{
            dose,
            getDose,
            uploadDose
        }}
    >
        {children}
    </DoseContext.Provider>
)

}

export default DoseContext