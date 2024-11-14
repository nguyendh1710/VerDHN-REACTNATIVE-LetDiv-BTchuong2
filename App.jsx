import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import EmployeeList from "./src/screen/EmployeeList/EmployeeList";

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import CusModal from "./src/components/CusModal/CusModal";

export default function App() {
  return (
    <Provider store={store}>  
    <SafeAreaView style={styles.container}>
      <EmployeeList />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    
  },
});
