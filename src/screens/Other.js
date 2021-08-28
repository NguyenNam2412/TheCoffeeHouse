import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function Other() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.utilities}>
                        <Text style={styles.text}>Tiện ích</Text>
                        <TouchableOpacity style={styles.utilities1}>
                            <View style={styles.btnutils}>
                                <MaterialCommunityIcons size={25} color={'#e47905'} name="file-document-outline" />
                                <Text style={styles.textutils}>Lịch sử đơn hàng</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.utilitiesBox}>
                            <TouchableOpacity style={styles.utilities2}>
                                <View style={styles.btnutils}>   
                                    <MaterialCommunityIcons size={25} color={'#73d13d'} name="music-box-outline" />
                                    <Text style={styles.textutils}>Nhạc đang phát</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.utilities2}>
                                <View style={styles.btnutils}>
                                    <MaterialCommunityIcons size={25} color={'#b380eb'} name="clipboard-file-outline" />
                                    <Text style={styles.textutils}>Điều khoản</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.support}>
                        <Text style={styles.text}>Hỗ trợ</Text>
                        <View style={styles.supview}>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <MaterialCommunityIcons size={25} color={'#000'} name="star-outline" />
                                        <Text style={styles.textutils}>{"  "}Đánh giá đơn hàng</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxsup}></View>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <MaterialCommunityIcons size={20} color={'#000'} name="comment-outline" />
                                        <Text style={styles.textutils}>{"   "}Liên hệ và góp ý</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.acc}>
                        <Text style={styles.text}>Tài khoản</Text>
                        <View style={styles.accview}>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <MaterialCommunityIcons size={25} color={'#000'} name="account-outline" />
                                        <Text style={styles.textutils}>{"  "}Thông tin cá nhân</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxsup}></View>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <MaterialCommunityIcons size={25} color={'#000'} name="bookmark-outline" />
                                        <Text style={styles.textutils}>{"   "}Địa chỉ đã lưu</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxsup}></View>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <SimpleLineIcons size={25} color={'#000'} name="settings" />
                                        <Text style={styles.textutils}>{"   "}Cài đặt</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxsup}></View>
                            <TouchableOpacity style={styles.support1}>
                                <View style={styles.btnsup}>
                                    <View style={styles.textsup}>
                                        <SimpleLineIcons size={25} color={'#000'} name="login" />
                                        <Text style={styles.textutils}>{"   "}Đăng nhập</Text>
                                    </View>
                                    <MaterialIcons size={25} color={'#000'} name="keyboard-arrow-right" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.safe}>
                <Text style={styles.safetext}></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height: '100%',
    },
    container: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    content: {
        width:'90%',
        top: 25,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.5,
        color: '#000',
        marginBottom: 10
    },
    utilities: {
        marginBottom: 15,
        width: '100%',
        height: 280,
        flexDirection: 'column'
    },
    utilities1: {
        width: '100%',
        height: '40%',
        elevation: 2,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    utilitiesBox: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    utilities2: {
        width: '48%',
        height: '100%',
        elevation: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textutils: {
        fontSize: 16,
        color: '#000',
    },
    btnutils: {
        left: 15,
    },
    support: {
        flexDirection: 'column',
        marginBottom: 25,
    },
    supview: {
        width: '100%',
        height: 130,
        elevation: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        paddingLeft: 30,
    },
    support1: {
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btnsup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxsup: {
        width: '100%',
        height: 1,
        elevation: 0.3,
        borderColor: '#000',
    },
    textsup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accview: {
        width: '100%',
        height: 320,
        elevation: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        paddingLeft: 30,
    },
    safe: {
        height: 50,
    },
})