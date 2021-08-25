import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function Home() {
    return (
        <ScrollView style={styles.scrollView}>     
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.login}>
                        <View style={styles.Text}>
                            <Text>TOP</Text>
                            <Text>TOP</Text>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text>Dang nhap</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text>Dang nhap</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text styles={styles.content}>CONTENT</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#000',
        marginHorizontal: 20,
    },
    container: {
        
    },
    top: {
        width: '100%',
        height: 400,
        backgroundColor: '#fdf6e4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        width: '90%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        height: 1000,
        backgroundColor: '#fff'
    },
})