import React, { useState } from 'react';
import { Icon, Input, Pressable } from "native-base";

import { Feather } from '@expo/vector-icons';

interface PasswordProps {
    placeholder: string
    value: string
    onChangeText: (e: string) => void
    onBlur: (e: any) => void
}

export function Password({ placeholder, ...otherProps }: PasswordProps) {
    const [show, setShow] = useState(false);
    return (
        <Input
            {...otherProps}
            type={show ? 'text' : 'password'}
            placeholder={placeholder}
            InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                    <Icon
                        as={Feather}
                        name={show ? 'eye-off' : 'eye'}
                        size={5} mr={4} color='brand.800'
                    />
                </Pressable>
            }
        />
    )
}