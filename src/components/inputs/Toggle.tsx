import React from 'react';
import { Box, Button, Heading } from "native-base";

let activeProps = {
    btn: { bg: 'paper', _pressed: { bg: 'gray.100' } },
    text: { color: 'gray.800' }
}

let inactiveProps = {
    btn: { bg: 'neutral.100', _pressed: { bg: 'neutral.200' } },
    text: { color: 'neutral.300' }
}

interface ToggleProps {
    firstOptionLabel: string,
    lastOptionLabel: string,
    value: boolean,
    onChange: (value: boolean) => void;
    size?: 'lg' | 'sm' | 'xl' | 'xs' | 'md'
    firstIcon?: React.ReactElement
    lastIcon?: React.ReactElement
}

export function Toggle(props: ToggleProps) {

    let firstOptionProps = props.value ? activeProps : inactiveProps;
    let lastOptionProps = !props.value ? activeProps : inactiveProps;

    function handleClick() {
        props.onChange(!props.value);
    }

    return (
        <Button.Group
            isAttached
            size={props.size} width={'full'}
            borderRadius={8}
        >
            <Button
                flex={1}
                onPress={handleClick}
                leftIcon={props.firstIcon}
                _icon={{...firstOptionProps.text}}
                {...firstOptionProps.btn}
            >
                <Heading size={props.size} {...firstOptionProps.text}>
                    {props.firstOptionLabel}
                </Heading>
            </Button>
            <Button
                flex={1}
                onPress={handleClick}
                leftIcon={props.lastIcon}
                _icon={{...lastOptionProps.text}}
                {...lastOptionProps.btn}
            >
                <Heading size={props.size} {...lastOptionProps.text}>
                    {props.lastOptionLabel}
                </Heading>
            </Button>
        </Button.Group>
    )
}