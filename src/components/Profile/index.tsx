import React from "react";
import { View, Text } from 'react-native';

import { Avatar } from "../Avatar";

import { styles } from "./style";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage={"https://github.com/rJottaper.png"} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Hi,
                    </Text>
                    <Text style={styles.username}>
                        Jota
                    </Text>
                </View>
                <Text style={styles.message}>
                    Today Is a Day of Victory
                </Text>
            </View>
        </View>
    )
}