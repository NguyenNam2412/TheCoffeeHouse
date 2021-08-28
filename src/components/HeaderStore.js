import React, { useState }from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HeaderStore() {
    
    const [search, setSearch] = useState('');
    
    return (
        <View style={styles.content}>
            <View style={styles.headersafe} />
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerText}>Cửa hàng</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.btn1}>
                            <MaterialCommunityIcons size={25} name="ticket-confirmation-outline" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <MaterialCommunityIcons size={25} style={styles.icon2} name="bell-outline" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.headerBot}>
                    <TouchableOpacity style={styles.btnSearch} >
                        <MaterialCommunityIcons size={25} name="magnify" />
                        <TextInput 
                            placeholder = "Nhập tên đường"
                            onChangeText={text => setSearch(text)}
                            value={search}
                            style={styles.searchBar} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnMap}>
                        <MaterialCommunityIcons size={20} style={styles.icon2} name="map-outline" />
                        <Text style={styles.btnMapText}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        width: '105%',
        top: 5,
        right: 10,
    },
    header:{
        width: '100%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'column',
    },
    headerTop: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerLeft: {
        //chua biet viet gi
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
    headerBot: {
        width: '95%',
        top: 2,
        flexDirection: 'row',
    },
    btnSearch: {
        width: '70%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    searchBar: {
        width: '80%',
        height: '100%',
        left: 10,
        fontSize: 18,
    },
    btnMap: {
        width: '25%',
        height: '100%',
        left: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnMapText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    }
})