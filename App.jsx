import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import EmployeeList from "./src/screen/EmployeeList/EmployeeList";
import FloatButton from "./src/components/FloatButton/FloatButton";
import EmployeeAdd from "./src/screen/EmployeeAdd/EmployeeAdd";


export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      {/* <FloatButton/>
      <EmployeeList /> */}
      <EmployeeAdd/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
