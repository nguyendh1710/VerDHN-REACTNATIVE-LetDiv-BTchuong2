import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import EmployeeList from "./src/screen/EmployeeList/EmployeeList";
<<<<<<< HEAD
import FloatButton from "./src/components/FloatButton/FloatButton";
import EmployeeAdd from "./src/screen/EmployeeAdd/EmployeeAdd";


export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      {/* <FloatButton/>
      <EmployeeList /> */}
      <EmployeeAdd/>
    </SafeAreaView>

=======

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
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
<<<<<<< HEAD
    // alignItems: "center",
    // justifyContent: "center",
=======
    
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  },
});
