import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
//redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
//thunks
import {downloadDataBanks} from "../redux/slices/bankSlice";

export default function DownloadData() {
    
  const dispatch = useDispatch<AppDispatch>();
  
  const handledownloadDataBanks = async () => {
    await dispatch(downloadDataBanks());
  }  

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>handledownloadDataBanks()}>
            <Text style={styles.text}>Download Data Banks</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 10
    },
    text:{
        color: 'white'
    }
})