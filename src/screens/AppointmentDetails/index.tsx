import React from "react";
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import BannerImg from '../../assets/banner.png'

import { theme } from "../../global/styles/theme";
import { styles } from './style'
 
export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Jota',
            avatar_url: 'https://github.com/rJottaper.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Deric Rapariga',
            avatar_url: 'https://github.com/dericzin.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header 
                title="Details" 
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </BorderlessButton>
                } 
            />
            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>
                        The Caboquinhos
                    </Text>
                    <Text style={styles.subtitle}>
                        Today We Will Just Win - Loren IMPSU Loren Loren Loren Loren Loren MD10 
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Players" subtitle="Total 3" />
            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Enter the match" />
            </View>
        </Background>
    )
}