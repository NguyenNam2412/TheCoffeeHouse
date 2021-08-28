import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-6.jpg'
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
		title: 'First Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
		title: 'Second Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d721',
		title: 'Third Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
];

export default function Store() {

	const renderItem = ({ item }) => (
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
                <Text style={{ fontSize: 20, margin: 6 }}>$20.05</Text>
                <Text style={{ fontSize: 20, margin: 2 }}>$20.05</Text>
            </View>
        </View>
	);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.text}>Các cửa hàng khác</Text>
                            <FlatList
                                style={styles.flatList}
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        backgroundColor: '#f5f5f5'
    },
    content: {
        width: '100%',
        margin: 16,
        justifyContent: 'space-around',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    box: {
        width: '90%',
        height: 120,
        margin: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imagebox: {
        width: '30%',
        height: '90%',
        left: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    info: {
        height: '90%',
        left: 15,
    },
    flatList: {
        width: '100%'
    },
})