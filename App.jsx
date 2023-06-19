import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import * as ChampionsLeague from './Champions League';



export default function App() {
    return (
        <View style={ChampionsLeague.styles.container}>
            <Text>ChampionsLeagueApp</Text>
            <StatusBar style="auto" />
        </View>
    );
}
