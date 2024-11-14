import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./EmployeeAdd.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useSelector, useDispatch } from "react-redux";

export default function EmployeeAdd({
  modalState,
  setModalState,
  addNewEmployee,
}) {
  const [textEmployeeName, setTextEmployeeName] = useState("");
  const [textEmployeePosition, setTextEmployeePosition] = useState("");

  const handleChangeEmployeeName = (input) => {
    setTextEmployeeName(input);
  };

  const handleChangeEmployeePosition = (input) => {
    setTextEmployeePosition(input);
  };
  const handleAddEmployee = () => {
    //   // tạo một object để chứa đối tượng mới tạo
    const newEmployee = {
      addedEmployeeName: textEmployeeName,
      addedEmployeePosition: textEmployeePosition,
    };
    //   // gọi hàm addnewProducttoCopyData bên cha bằng callback để gửi  sản phẩm mới lên  để bên cha đính thêm id  tạo mới vào và luu vô mảng copyData-> dùng kỹ thuật nâng state bên cha
    console.log(newEmployee);
    addNewEmployee(newEmployee);
    //   // chuyển các input lại thành rỗng

    setTextEmployeePosition("");
    setTextEmployeeName("");
    //   // truyền callback lên cha để đóng modal
    setModalState(!modalState);
  };

  //

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Thêm nhân viên </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          value={textEmployeeName}
          onChangeText={handleChangeEmployeeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Chức vị"
          value={textEmployeePosition}
          onChangeText={(e) => handleChangeEmployeePosition(e)}
        />
      </View>
      <PrimaryButton style={styles.button} onPress={handleAddEmployee}>
        Lưu
      </PrimaryButton>
    </View>
  );
}
//////////////////
