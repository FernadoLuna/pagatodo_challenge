import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
//types
import {banks} from '../../redux/types/banksTypes';

type Props = {
        item: banks
}

export default function CardBankRender(props: Props) {
    const {item} = props;
    
    return (
        <View style={styles.card_container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.url,
                    }}
                    resizeMode='cover'
                />
            </View> 
            <View style={styles.card_info}>
                <Text style={styles.bankName}>{item.bankName}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.age}>Age: {item.age}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card_container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        backgroundColor:"#f0f0f0",
        marginVertical: 10,
        padding: 10,
    },
    imageContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    card_info: {
        width: '50%',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    bankName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        color: '#666',
    },
    age: {
        marginTop: 5,
        color: '#999',
    },
});