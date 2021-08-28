import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';

export default function Home() {
    return (
        <ScrollView style={styles.scrollView}> 
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.login}>
                        <View style={styles.texttop}>
                            <Text style={styles.text1}>Đăng nhập</Text>
                            <Text style={styles.text2}>
                                Sử dụng app và tích điểm và đổi những ưu đãi{"\n"}
                                Chỉ dành riêng cho thàn viên bạn nhé !
                            </Text>
                        </View>
                        <View style={styles.btn1}>
                            <TouchableOpacity>
                                <Text style={styles.textbtn1}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={require('../assets/coffee.jpg')} style={styles.backgroundImage} />
                        <View style={styles.btn2}>
                            <TouchableOpacity style={styles.btnTable}>
                                <View style={styles.tab}>
                                    <Text style={styles.textbtn2}>The Coffee House's Reward</Text>
                                    <MaterialCommunityIcons size={45} name="chevron-right" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.box1}></View>
                    <View style={styles.box2}>
                        <View style={styles.box2left}>
                            <TouchableOpacity style={styles.btnbox}>
                                <Image source={require('../assets/ScreenshotTheCoffeeHouse1.png')} style={styles.backgroundImage} />
                                <Text style={styles.textbtnbox}>Giao hàng</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box2right}>
                            <TouchableOpacity style={styles.btnbox}>
                                <Image source={require('../assets/ScreenshotTheCoffeeHouse2.png')} style={styles.backgroundImage} />
                                <Text style={styles.textbtnbox}>Mang đi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <Swiper style={styles.wrapper} >
                            <View style={styles.slide1}>
                                <Text style={styles.text}>Hello Swiper</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.content}>
                        
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
    },
    container: {
        //chua biet viet gi
    },
    top: {
        height: 400,
        backgroundColor: '#fdf6e4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        width: '90%',
        height: '85%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        elevation: 2,
    },
    texttop: {
        alignItems: 'center',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        top: 20,
        letterSpacing: 1.5,
    },
    text2: {
        fontSize: 15,
        top: 15,
        margin: 20,
        textAlign: 'center',
    },
    btn1: {
        top: 10,
        width: 185,
        height: 40,
        backgroundColor: '#e47905',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        zIndex: -1,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    textbtn1: {
        color: '#fff',
        fontSize: 16,
    },
    btn2: {
        bottom: 15,
    },
    btnTable: {
        width: 330,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: '#fff'
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textbtn2: {
        color: '#000',
        fontSize: 16,
    },
    bottom: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 20,
        alignItems: 'center',
        flexDirection: 'column',
    },
    box1: {
        width: 70,
        height: 6,
        top: 10,
        backgroundColor: '#bbbbbb',
        borderRadius: 10,
    },
    box2: {
        width: '90%',
        height: '11%',
        top: 30,
        borderRadius: 10,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2left: {
        borderRightWidth: 0.5,
        width: '49%',
        height: '75%',
    },
    box2right: {
        width: '49%',
        height: '75%',
    },
    btnbox: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textbtnbox: {
        fontSize: 16,
    },
    box3: {
        width: '90%',
        height: 100,
        top: 50,
    },
    wrapper: {
        
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    content: {
        width: '100%',
        height: 1000,
    },
})