import React, { createContext, useState } from "react";
import api from '../api';

interface DoseContextData {
    isFeatching: boolean;
  dose: {
    quantity: number,
    taken?: boolean,
    sent?: boolean,
    time?: Date, 
    medication: {
        name: string,
        unitType?: "LIQUID" | 'PILL',
        frequency: string,
        until?: Date,
        stock: number,
        active: boolean
        observation?: string
    }
  };
  getDose(id: string): Promise<{ error: boolean; errorMessage?: string }>;
  updateDose(id: string, values: object): Promise<{ error: boolean; errorMessage?: string }>;
}

interface DoseProviderProps {
  children: React.ReactNode;
}

const DoseContext = createContext<DoseContextData>({} as DoseContextData);

export function DoseProvider({ children }: DoseProviderProps) {
  const [dose, setDose] = useState({
    quantity: 0,
    medication: {
        name: '',
        frequency: '',
        stock: 0,
        active: true
    }
  });

  const [isFeatching, setIsFeatching] = useState(true)

  async function getDose(id: string) {
    setIsFeatching(true)
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
    } finally{
        setIsFeatching(false)
    }
  }

  async function updateDose(id: string, values:object) {
    try {
        const response = await api.patch(`/doses?id=${id}`, values);
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
            isFeatching,
            getDose,
            updateDose
        }}
    >
        {children}
    </DoseContext.Provider>
)

}

export default DoseContext