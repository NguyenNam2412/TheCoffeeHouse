import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions ,FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper'
import axios from 'axios'
import { getImage } from '../utils'
import { getProductList } from '../services/Api'

export default function Home() {

    const [product, setProduct] = useState([])

    useEffect(() => {
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				console.log('rs', response.data.data);
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])

    const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;

	const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5 }}>
			<View style={styles.box}>
                <View style={styles.imagebox}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.image,
                        }}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={{ fontSize: 20, margin: 2 }}>Tshirt blackwinter</Text>
                    <Text style={{ fontSize: 20, margin: 2 }}>$20.05</Text>
                </View>
            </View>
		</View>
	);

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
                        <Swiper style={styles.wrapper} autoplay>
                            <View style={styles.slide1}>
                                <Image
                                    style={styles.imageSwiper}
                                    source={require('../assets/coffee.jpg')}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageSwiper}
                                    source={require('../assets/coffee.jpg')}
                                />
                            </View>
                            <View style={styles.slide3}>
                                <Image
                                    style={styles.imageSwiper}
                                    source={require('../assets/coffee.jpg')}
                                />
                            </View>
                            <View style={styles.slide4}>
                                <Image
                                    style={styles.imageSwiper}
                                    source={require('../assets/coffee.jpg')}
                                />
                            </View>
                            <View style={styles.slide5}>
                                <Image
                                    style={styles.imageSwiper}
                                    source={require('../assets/coffee.jpg')}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textContent}>Khám phá thêm</Text>
                        <View style={styles.headerBot}>
                            <TouchableOpacity style={[styles.btnTap, styles.btnact]}>
                                <Text style={styles.textTap, styles.btnact}>Ưu đãi đặc biệt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnTap}>
                                <Text style={styles.textTap}>Cập nhập từ nhà</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnTap}>
                                <Text style={styles.textTap}>#CoffeeLover</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cart}>
                        <FlatList
                            style={styles.flatList}
                            data={product}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
                    </View>
                </View>
            </View>
            <View style={{height: 15, width: '100%', height: '100%', backgroundColor: '#fff'}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    top: {
        height: 400,
        flex: 1,
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
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
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
        height: 130,
        top: 30,
        borderRadius: 10,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
        height: 200,
        top: 50,
    },
    wrapper: {
        height: 150,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
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
        backgroundColor: '#92BBD9',
    },
    content: {
        width: '100%',
        top: 50
    },
    textContent: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    headerBot: {
        flexDirection: 'row',
        left: 5,
    },
    btnTap: {
        width: 130,
        height: 40,
        left: 5,
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
    cart: {
        top: 20,
        width: '100%',
        margin: 16,
        justifyContent: 'space-around',
    },
    box: {
        width: '95%',
        height: 250,
        margin: 5,
        top: 20,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imagebox: {
        width: '100%',
        height: '70%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    info: {
        height: '30%',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%'
    },
})