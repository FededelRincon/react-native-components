import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const { isActive, isHungry, isHappy } = state;

    const onChange = ( value: boolean, field: string ) => {
        setState({
            ...state,
            [field]: value
        })
    }


    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title='Switches'/>
            
            <View style={styles.switchRow}>
                <Text style={ styles.swithText }>IsActive</Text>
                <CustomSwitch isOn={ isActive } onChange={ (value) => onChange(value, 'isActive') } />
            </View>

            <View style={styles.switchRow}>
                <Text style={ styles.swithText }>isHungry</Text>
                <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange(value, 'isHungry') } />
            </View>

            <View style={styles.switchRow}>
                <Text style={ styles.swithText }>isHappy</Text>
                <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange(value, 'isHappy') } />
            </View>

            <Text style={{... styles.swithText, marginTop: 30 }}>
                { JSON.stringify( state, null, 5 )}
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    swithText: {
        fontSize: 25,
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginVertical: 5,
    }
});