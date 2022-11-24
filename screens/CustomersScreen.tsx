import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn';

const CustomersScreen = () => {
    const tws = useTailwind();
    return (
        <SafeAreaView>
            <Text style={tws('text-blue-500')}> This is the customer screen </Text>
        </SafeAreaView>
    )
}

export default CustomersScreen
 