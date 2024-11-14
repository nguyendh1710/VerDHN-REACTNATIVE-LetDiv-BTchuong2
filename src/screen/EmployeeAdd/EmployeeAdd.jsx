import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./EmployeeAdd.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee,filterEmployee} from './../../slices/slice';
import Input from '../../components/Input/Input';
export default function EmployeeAdd({modalState,setModalState}) {

  const dispatch = useDispatch();

  const [textEmployeeName, setTextEmployeeName] = useState("");
  const [textEmployeePosition, setTextEmployeePosition] = useState("");


  const handleAddEmployee = () => {
  //   // tạo một object để chứa đối tượng mới tạo -> nho de key khop voi mang goc state
    const addedEmployee = {
      name: textEmployeeName,
      avatarUri: textEmployeePosition,

    };
  //   // gọi hàm de dispatch
  dispatch(addEmployee(addedEmployee)) ;
  // dispatch(filterEmployee(addedEmployee));
  //   // chuyển các input lại thành rỗng

    setTextEmployeePosition("");
    setTextEmployeeName("");
  //   // truyền callback lên cha để đóng modal
    setModalState(!modalState);
  };
 
 
 
  
 
 


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thêm nhân viên </Text>
      <Input
        style={styles.inputContainer}
        placeholder="Họ và tên"
        value={textEmployeeName}
        onChangeText={(e) => setTextEmployeeName(e)}
      />
      <Input
        style={styles.inputContainer}
        placeholder="Chức vị"
        value={textEmployeePosition}
        onChangeText={(e) => setTextEmployeePosition(e)}
      />
     <View style={styles.buttonPosition}>
     <PrimaryButton  onPress={handleAddEmployee}  >
        Lưu
      </PrimaryButton>
     </View>
     
    </View>
  );
}
