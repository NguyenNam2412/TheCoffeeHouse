import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function AccumulatePoints() {
    return (
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#f98a1f', '#f07d18', '#e56712']} style={styles.login}>
                <View style={styles.texttop}>
                    <Text style={styles.text}>
                        Sử dụng app và tích điểm và đổi những ưu đãi{"\n"}
                        Chỉ dành riêng cho thàn viên bạn nhé !
                    </Text>
                </View>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#f4984b', '#f39245', '#eb8844']} style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={styles.textbtn}>Đăng nhập</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </LinearGradient>
            <View style={styles.bot}>
                <Image
                    style={styles.image}
                    source={require('../assets/PointsCard.jpg')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    login: {
        width: '90%',
        height: '50%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    text: {
        textAlign: 'center',
        bottom: 10,
        margin: 10,
        color: '#fff',
    },
    btn: {
        width: 200,
        height: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    textbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bot: {
        width: '100%',
        height: '35%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})