import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
//libs
import AsyncStorage from '@react-native-async-storage/async-storage';
//redux
import { Provider, useSelector,useDispatch } from 'react-redux';
import { store,RootState } from './src/redux/store';
import { setListBanks } from './src/redux/slices/bankSlice';
//screens
import Home from './src/screens/Home';
import DownloadData from './src/screens/DownloadData';

export default function App() {

  function DataBanks() {

    const dispatch = useDispatch();

    AsyncStorage.getItem('banksData').then(data => {
      if (data) {
       dispatch(setListBanks(JSON.parse(data)));
      }
    });
  
    const state = useSelector((state: RootState) => state.banksState.has_data);

    switch (state) {
      case false:
        return <DownloadData />;
      case true:
        return <Home />;
      default:
        return <Text>Error check with the developer</Text>;
    }
  }

  return (
    <Provider store={store}>
      <DataBanks />
      <StatusBar style="auto" />
    </Provider>
  );
}

