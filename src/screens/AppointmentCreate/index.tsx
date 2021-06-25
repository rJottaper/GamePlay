import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../ModalView";
import { Guilds } from "../Guilds";

import { theme } from "../../global/styles/theme";
import { styles } from './style'
import { GuildProps } from "../../components/Guild";

 
export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Background>
                    <Header title="New Match"/>
                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Category
                    </Text>
                    <CategorySelect 
                        hasCheckBox 
                        setCategory={setCategory}
                        categorySelected={category} 

                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon /> : <View style={styles.image} /> 
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        { guild.name ?  guild.name : 'Select a Server' }
                                    </Text>
                                </View>
                                <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>Day and Month</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>Hour</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Description</Text>
                            <Text style={styles.characterLimit}>Max 100 Characters</Text>
                        </View>
                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button title="Create" />
                        </View>
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openGuildsModal}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}