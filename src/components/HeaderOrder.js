import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HeaderOder() {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerText}>Chào bạn mới</Text>
            </View>
            <View style={styles.headerRight}>
                <View>
                    <TouchableOpacity style={styles.btn1}>
                        <MaterialCommunityIcons size={25} name="ticket-confirmation-outline" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn2}>
                        <MaterialCommunityIcons size={25} style={styles.icon2} name="bell-outline" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: "row",
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        letterSpacing: 1,
        left: 10,
    },
    headerRight: {
        flexDirection: 'row',
    },
    btn1: {
        elevation: 2,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
    },
    btn2: {
        elevation: 2,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
