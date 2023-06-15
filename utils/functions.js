import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function Button(props) {
    return <TouchableOpacity onPress={ props.onPress }>
        <Text>{ props.label }</Text>
    </TouchableOpacity>
}

