import React, { ReactNode } from 'react';
import { View, Text, Modal, ModalProps } from 'react-native';

import { Background } from '../components/Background';

import { styles } from './style'

type Props = ModalProps & {
    children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
    return(
        <Modal
            transparent
            animationType="slide"
            { ...rest }
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                        { children }
                    </Background>
                </View>
            </View>
        </Modal>
    )
}