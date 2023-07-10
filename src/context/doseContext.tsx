import React, { createContext, useState } from "react";
import api from '../api';

interface DoseContextData {
  dose: object;
  currentDayDoses: Array<Object>;
  getDose(id: string): Promise<{ error: boolean; errorMessage?: string }>;
  uploadDose(values: object): Promise<{ error: boolean; errorMessage?: string }>;
  getCurrentDoses(date: string): Promise<{ error: boolean; errorMessage?: string }>;
}

interface DoseProviderProps {
  children: React.ReactNode;
}

const DoseContext = createContext<DoseContextData>({} as DoseContextData);

export function DoseProvider({ children }: DoseProviderProps) {
  const [dose, setDose] = useState({});
  const [currentDayDoses, setCurrentDayDoses] = useState([]);
  const [isFeatching, setFeatching] = useState(false);

  async function getCurrentDoses(date: string) {
    console.log('Date', date)
    setFeatching(true);
    try {
      const response = await api.get('/doses', { params: { date } })
      console.log("Doses do dia", JSON.stringify(response.data, null, 2))
      setCurrentDayDoses(response.data)
      return { error: false }
    } catch (error: any) {
      if (error.response.data.statusCode === 500) {
        return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
      }
      return { error: true, errorMessage: error.response.data.message }
    } finally {
      setFeatching(false);
    }
  }

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

  async function uploadDose(values: object) {
    try {
      const response = await api.patch("/doses", { params: { values } });
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
        currentDayDoses,
        getDose,
        uploadDose,
        getCurrentDoses
      }}
    >
      {children}
    </DoseContext.Provider>
  )

}

export default DoseContext