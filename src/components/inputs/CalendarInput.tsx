import React, { useState } from "react";
import { Input } from "native-base";
import { Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface CalendarInputProps {
    value: any;
    onChange: (value: any) => void;
    inputProps: Object;
    calendarProps: Object;
}

export function CalendarInput({ value, onChange, inputProps, calendarProps }: CalendarInputProps) {
    const [isVisible, setVisibility] = useState(false);
    const [displayValue, setDisplayValue] = useState('')

    const toogleCalendarVisibility = () => {
        setVisibility(!isVisible);
    }

    const onChangeDate = ({ type }: any, newDate: any) => {
        setVisibility(false);
        if (type === 'set') {
            onChange(newDate)
            let formatDisplayData = calendarProps?.mode === 'time' ?
                newDate.toLocaleTimeString('pt-BR').slice(0, -3) :
                newDate.toLocaleDateString('pt-BR')
            setDisplayValue(formatDisplayData)
        }
    }

    return (
        <>
            {isVisible && (
                <DateTimePicker
                    {...calendarProps}
                    value={value}
                    minimumDate={new Date()}
                    onChange={onChangeDate}
                />
            )}
            <Pressable onPress={toogleCalendarVisibility} style={{ flex: 1 }}>
                <Input
                    value={displayValue}
                    flex={1}
                    editable={false}
                    {...inputProps}
                />
            </Pressable>
        </>
    )
}