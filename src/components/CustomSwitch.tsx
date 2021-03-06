import React, { useState } from 'react'
import { Platform, Switch, View } from 'react-native'


interface Props {
    isOn : boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    };

    
    return (
        <View>
            <Switch
                trackColor={{ false: "#D9D9DB", true: "#5856D6" }}  //barrita
                thumbColor={ (Platform.OS === 'android') ? '#5658d6' : '' } //puntito
                // ios_backgroundColor="#3e3e3e"
                onValueChange={ toggleSwitch }
                value={ isEnabled }
            />
        </View>
    )
}
