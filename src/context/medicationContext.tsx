import React, { useEffect, useState } from 'react';
import { createContext } from "react";

import api from "../api";

interface MedicationContextData {
    medications: Array<Object>;
    isFeatching: boolean;
    getMedications(): Promise<{ error: boolean, errorMessage?: string }>;
    registerMedication(values: Object): Promise<{ error: boolean, errorMessage?: string }>
}

interface MedicationProviderProps {
    children: React.ReactNode
}

const MedicationContext = createContext<MedicationContextData>({} as MedicationContextData);

export function MedicationProvider({ children }: MedicationProviderProps) {
    const [medications, setMedications] = useState([]);
    const [isFeatching, setFeatching] = useState(false);

    async function getMedications() {
        setFeatching(true);
        try {
            const response = await api.get('/medication');
            setMedications(response.data);
            return { error: false }
        } catch (error: any) {
            if(error.response.data.statusCode === 500) {
                return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
            }
            return { error: true, errorMessage: error.response.data.message }
        } finally {
            setFeatching(false);
        }
    }

    async function registerMedication(values: Object) {
        setFeatching(true);
        try {
            console.log('Dando post num novo medicamento...')
            const response = await api.post('/medication', values);
            console.log(response.data, null, 2);
            return { error: false }
        } catch (error: any) {
            console.log('Dando erro no post num novo medicamento...')
            console.log(JSON.stringify(
                error.response.data,
                null,
                2
            ))

            if(error.response.data.statusCode === 500) {
                return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
            }
            return { error: true, errorMessage: error.response.data.message }
        } finally {
            setFeatching(false);
            getMedications();
        }
    }

    return (
        <MedicationContext.Provider
            value={{
                medications,
                isFeatching,
                getMedications,
                registerMedication
            }}
        >
            {children}
        </MedicationContext.Provider>
    )
}

export default MedicationContext;