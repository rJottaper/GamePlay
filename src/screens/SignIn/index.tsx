import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Image 
                source={IllustrationImg} 
                style={styles.image} 
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}
                    Your Games {'\n'}
                    Easily
                </Text>
                <Text style={styles.subtitle}>
                    Create Groups to Play Your Favorite {'\n'}
                    Games With Your Friends
                </Text>
                <ButtonIcon title="Login With Discord" activeOpacity={0.6} />
            </View>
        </View>
    );
};