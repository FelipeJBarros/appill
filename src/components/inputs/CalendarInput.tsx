import React, { useState } from "react";
import { Input } from "native-base";
import { Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function CalendarInput({ value, onChange }: any) {
    const [isVisible, setVisibility] = useState(false);
    const [displayValue, setDisplayValue] = useState('')

    const toogleCalendarVisibility = () => {
        setVisibility(!isVisible);
    }

    const onChangeDate = ({type}: any, newDate: string) => {
        setVisibility(false);
        if(type === 'set') {
            onChange(newDate)
            if(Platform.OS === 'android') {
                setVisibility(false);
                setDisplayValue(new Date(newDate).toLocaleDateString('pt-BR'))
            }
        } else {
            toogleCalendarVisibility();
        }
    }

    return (
        <>
            {isVisible && (
                <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={value}
                    minimumDate={new Date()}
                    onChange={onChangeDate}
                />
            )}
            <Pressable onPress={toogleCalendarVisibility} style={{ flex: 1}}>
                <Input
                    value={displayValue}
                    placeholder={new Date().toLocaleDateString('pt-BR')}
                    borderWidth={0}
                    flex={1}
                    textAlign='right'
                    editable={false}
                />
            </Pressable>
        </>
    )
}