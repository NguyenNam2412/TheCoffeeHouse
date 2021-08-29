import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from "react-native-raw-bottom-sheet"

export default function HeaderOder() {
    const refRBSheet = useRef();
    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <View style={styles.dropBox}>
                    <TouchableOpacity style={styles.dropBtn} onPress={() => refRBSheet.current.open()}>
                        <View style={styles.boxBtn}>
                            <Image style={styles.image} source={require('../assets/ScreenshotTheCoffeeHouse1.png')}/>
                        </View>
                        <View style={styles.textBtn}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text1}> Giao đến</Text>
                                <MaterialIcons size={20} name="keyboard-arrow-down" />
                            </View>
                            <Text style={styles.text2}>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
                        </View>
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                    >
                    <View></View>
                    </RBSheet>
                </View>
            </View>
            <View style={styles.headerBot}>
                <TouchableOpacity style={styles.cart} onPress={() => refRBSheet.current.open()}>
                    <Text style={styles.cartText}>Cà phê</Text>
                    <MaterialIcons size={20} name="keyboard-arrow-down" />
                </TouchableOpacity>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}
                >
                    <View></View>
                </RBSheet>
                <TouchableOpacity style={styles.btn1}>
                    <MaterialIcons size={25} name="search" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <MaterialCommunityIcons size={20} name="heart-outline" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    headerTop:{
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dropBox: {
        width: '100%',
        height: '100%',
    },
    dropBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxBtn: {
        width: '30%',
        height: '90%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textBtn: {
        right: 15,
        height: '100%',
        justifyContent: 'space-evenly',
    },
    text1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    text2: {
        left: 5,
    },
    headerBot: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        bottom: 5,
        left: 10,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        letterSpacing: 1,
        left: 10,
    },
    cart: {
        width: '65%',
        height: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    cartText: {
        color: '#000',
        left: 5,
        fontSize: 18,
    },
    btn1: {
        elevation: 2,
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
    },
    btn2: {
        elevation: 2,
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
    },
})
