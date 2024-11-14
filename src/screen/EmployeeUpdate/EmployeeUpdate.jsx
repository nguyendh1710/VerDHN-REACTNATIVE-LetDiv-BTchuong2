import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./EmployeeUpdate.style";
import PrimaryButton from "./../../components/PrimaryButton/PrimaryButton ";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee, handleSaveUpdateEmployee } from "./../../slices/slice";
import Input from "../../components/Input/Input";

export default function EmployeeUpdate({ modalState, setModalState }) {
  // gọi hook useSelector để lấy state mới trên store về hiển thị
  const selectEmployeeNeedEdit = useSelector(
    (state) => state.employees.selectEmployee
  ); // Lấy danh sách nhân viên đã lọc từ Redux
  console.log("Nnhân viên cần phải thay đổi trươc lưu", editedNeedEmployee);
  console.log("Vị trí nhân viên cần phải thay đổi trươc lưu", editedNeedEmployee.id);
  // gọi hook useDispatch để dispatch action
  const dispatch = useDispatch();

  // gọi state để quanrn lý thay đổi của input và gắn giá trị mặ định cho state là lấy vè từ redux
  const [textEmployeeName, setTextEmployeeName] = useState(
    selectEmployeeNeedEdit.name
  );
  const [textEmployeePosition, setTextEmployeePosition] = useState(
    selectEmployeeNeedEdit.role
  );
  const [textEmployeeAvatar, setTextEmployeeAvatar] = useState(
    selectEmployeeNeedEdit.avatarUri
  );

  //   console.log(' nhân viên cần sửa', selectEmployeeNeedEdit)
  // console.log('tên nhân viên cần sửa', selectEmployeeNeedEdit.name)
  // console.log('vị trí cần sửa', selectEmployeeNeedEdit.role)
  const handleSave = () => {
    // tạo một object để chứa đối tượng mới tạo -> nho de key khop voi mang goc state
    const updatedEmployee = {
      // thêm vào id để qua handleSaveUpdateEmployee bên slice có thể filter
      id: selectEmployeeNeedEdit.id,
      name: textEmployeeName,
      role: textEmployeePosition,
      avatarUri: textEmployeeAvatar,
    };
    // gọi hàm de dispatch
    dispatch(handleSaveUpdateEmployee(updatedEmployee));

    // chuyển các input lại thành rỗng

    setTextEmployeePosition("");
    setTextEmployeeName("");
    setTextEmployeeAvatar("");
    //   // truyền callback lên cha để đóng modal
    setModalState(!modalState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sửa nhân viên </Text>
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
       <Input
        style={styles.inputContainer}
        placeholder="Avatar"
        value={textEmployeeAvatar}
        onChangeText={(e) => setTextEmployeeAvatar(e)}
      />
      <View style={styles.buttonPosition}>
        <PrimaryButton onPress={handleSave}>Lưu</PrimaryButton>
      </View>
    </View>
  );
}
