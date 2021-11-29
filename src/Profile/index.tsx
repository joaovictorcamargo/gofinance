import React from 'react'
import { View,
     Text,
    TextInput,
    Button,
 } from 'react-native'

export default function Profile() {
    return (
        <View>
            <Text>Profile</Text>

            <TextInput placeholder="Name"
            autoCorrect={false}
            />
            <TextInput
            placeholder="about"
            />

            <Button
            title="Save"
            onPress={() => {}}
            />
        </View>
    )
}
