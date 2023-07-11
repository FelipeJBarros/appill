import React, { createContext, useState } from "react";
import api from '../api';
import { schedulePushNotification } from "../notification";

interface DoseContextData {
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
  currentDayDoses: Array<Object>;
  isFeatching: boolean;
  getDose(id: string): Promise<{ error: boolean; errorMessage?: string }>;
  getCurrentDoses(date: string): Promise<{ error: boolean; errorMessage?: string }>;
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
  const [currentDayDoses, setCurrentDayDoses] = useState([]);
  const [isFeatching, setIsFeatching] = useState(true)

  async function getCurrentDoses(date: string) {
    console.log('Date', date)
    setIsFeatching(true);
    try {
      const response = await api.get('/doses', { params: { date } })
      console.log("Doses do dia", JSON.stringify(response.data, null, 2))
      setCurrentDayDoses(response.data)
      response.data.forEach((dose: any) =>{
        schedulePushNotification(dose.medication.name, "nao esqueça de tomar sua medicação", dose.id, dose.time.toString())
      })
      return { error: false }
    } catch (error: any) {
      if (error.response.data.statusCode === 500) {
        return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
      }
      return { error: true, errorMessage: error.response.data.message }
    } finally {
      setIsFeatching(false);
    }
  }


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
    } finally {
      setIsFeatching(false)
    }
  }

  async function updateDose(id: string, values: object) {
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
        currentDayDoses,
        getDose,
        updateDose,
        getCurrentDoses
      }}
    >
      {children}
    </DoseContext.Provider>
  )
}

export default DoseContext