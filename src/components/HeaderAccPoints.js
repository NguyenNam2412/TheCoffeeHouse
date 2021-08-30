import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HeaderAccPoints() {

    const onFocus = () => {
        true ? style={backgroundColor:'#f5f5f5', color:'#e47905'} : style={backgroundColor:'#fff', color:'#000'}
    }

    return (
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerText}>Tích điểm</Text>
                </View>
                <View style={styles.headerRight}>
                    <View>
                        <TouchableOpacity style={styles.btn1} >
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
            <View style={styles.headerBot}>
                <TouchableOpacity style={[styles.btnTap, styles.btnact]} onFocus={true}>
                    <Text style={styles.textTap, styles.btnact}>Tích điểm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTap}>
                    <Text style={styles.textTap}>Đổi ưu đãi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
    },
    headerTop:{
        width: '100%',
        height: '50%',
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
        elevation: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
    },
    btn2: {
        elevation: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBot: {
        flexDirection: 'row',
        left: 5,
    },
    btnTap: {
        width: 100,
        height:40,
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTap: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    btnact: {
        backgroundColor:'#f5f5f5', 
        color:'#e47905',
        fontWeight: 'bold',
        fontSize: 15,
    },
})