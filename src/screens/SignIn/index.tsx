import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image 
                    source={IllustrationImg} 
                    style={styles.image} 
                    resizeMode="stretch"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Connect and {'\n'}
                        Organize Your {'\n'}
                        Games
                    </Text>
                    <Text style={styles.subtitle}>
                        Create Groups to Play Your Favorite {'\n'}
                        Games With Your Friends
                    </Text>
                    <ButtonIcon title="Login With Discord" onPress={handleSignIn} />
                </View>
            </View>
        </Background>
    );
};