import React, {useState } from 'react';
import { View, Image, Text, TextInput,FlatList,TouchableOpacity } from 'react-native';
import EmployeeItem from './EmployeeItem/EmployeeItem';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './EmployeeList.style'
import CusModal from './../../components/CusModal/CusModal';
import EmployeeAdd from './../EmployeeAdd/EmployeeAdd';
const employees  = [
  { id: 1, name: 'Trần Anh Dũng', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 2,name: 'Trần Mai Lan', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 3,name: 'Trần Minh Tuấn', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 4,name: 'Trần Ngọc Hân', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 5,name: 'Trần Hoàng Nam', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 6, name: 'Trần Thị Lan', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 7,name: 'Trần Quang Huy', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 8,name: 'Trần Thảo Vy', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 9,name: 'Trần Bảo Minh', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 10,name: 'Trần Văn Tèo', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
  { id: 11,name: 'Trần Văn Tâm', role: 'Developer', avatarUri: 'https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true' },
];

export default function EmployeeList() {
    const copyEmployees =[...employees]

  // State để lưu trữ tên nhập vào và kết quả tìm kiếm

  const [filteredEmployees, setFilteredEmployees] = useState(copyEmployees);

  // State để đóng mở modal
  const [showModal, setShowModal] = useState(false);
  // Hàm tìm kiếm nhân viên
  const handleSearch = (text) => {
    console.log(text);

    // if (text.trim() === "") {
    //   setFilteredEmployees(copyEmployees); // Nếu không có nhập gì, trả lại toàn bộ danh sách
    // } else {
      const filtered = copyEmployees.filter((employee) =>
        employee.name.toLowerCase().includes(text.toLowerCase())
      );
      // Nếu không có nhân viên nào trùng khớp, trả lại dữ liệu ban đầu
      setFilteredEmployees(filtered); // Nếu có kết quả, hiển thị kết quả lọc
    // }
  };
  const addEmployee = (newEmployee) => {
    setFilteredEmployees([...filteredEmployees, newEmployee]);
  
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Quản Lý Nhân Viên</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TouchableOpacity>
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={32}
                color="gray"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm nhân viên"
              placeholderTextColor="rgba(206, 212, 218, 1)"
              accessibilityLabel="Tìm kiếm nhân viên"
              // không cần kiểm soát value -> uncontrol component
              // value={searchText}
              onChangeText={(text) => handleSearch(text)}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredEmployees}
            renderItem={({ item }) => <EmployeeItem dataItem={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <CusModal
      show={showModal}>
              <EmployeeAdd modalState={showModal} setModalState={setShowModal} addNewEmployee={addEmployee}/>
      </CusModal>
    </View>
  );
}


