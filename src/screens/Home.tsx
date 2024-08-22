import { View, Text,FlatList,Image,StyleSheet } from 'react-native'
import React from 'react'
//redux
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
//types
import {banks} from '../redux/types/banksTypes';
//components
import CardBankRender from '../components/home/CardBankRender';
export default function Home() {

  const state = useSelector((state: RootState) => state.banksState.banks);

  return (
      <FlatList
        data={state}
        style={styles.container}
        keyExtractor={(item) => item.bankName}
        renderItem={({ item }) => <CardBankRender item={item} />}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  card_container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor:"#f0f0f0",
    marginVertical: 10,
  },
})