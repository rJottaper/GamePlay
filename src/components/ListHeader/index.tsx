import React from "react";
import { View, Text, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

type Props = {
    title: string;
    subtitle: string
}

export function ListHeader({ title, subtitle }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                { title }
            </Text>
            <Text style={styles.subtitle}>
                { subtitle }                
            </Text>
        </View>
    );
};