import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import axios from 'axios'
import { getImage } from '../utils'
import { getProductList } from '../services/Api'

export default function Oder() {
    
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
                        <Text style={styles.text}>Cà phê</Text>
                            <FlatList
                                style={styles.flatList}
                                data={product}
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
