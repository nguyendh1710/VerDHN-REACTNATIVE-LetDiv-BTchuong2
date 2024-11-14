import { createSlice } from "@reduxjs/toolkit";

const dataOriginal = [
  {
    id: 1,
    name: "Trần Anh Dũng",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 2,
    name: "Trần Mai Lan",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 3,
    name: "Trần Minh Tuấn",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 4,
    name: "Trần Ngọc Hân",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 5,
    name: "Trần Hoàng Nam",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 6,
    name: "Trần Thị Lan",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 7,
    name: "Trần Quang Huy",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 8,
    name: "Trần Thảo Vy",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 9,
    name: "Trần Bảo Minh",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 10,
    name: "Trần Văn Tèo",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
  {
    id: 11,
    name: "Trần Văn Tâm",
    role: "Developer",
    avatarUri:
      "https://github.com/nguyendh-xp97/VerDHN-BT_Ch-ng2_QLNV---LetDiv-React-Native/blob/main/src/screens/EmployeeList/EmployeeItem/1000.png?raw=true",
  },
];

const initialState = {
  // Khởi tạo Danh sách nhân viên gốc
  dataEmployees: [...dataOriginal],
  filteredEmployees: [...dataOriginal], // Khởi tạo Danh sách nhân viên đã lọc
  addedEmployees: [], // Danh sách nhân viên đã thêm
};
const employeesSlice = createSlice({
  name: "employees", // phải đặt tên để khai báo bên store cho redux biết cái slice tên này để quản lý nhân viên -> để nhiều khi có thêm quản lý khách hàng, sản phẩm,...
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // Tạo ID mới cho nhân viên
      const newId =
        Math.max(...state.dataEmployees.map((emp) => emp.id), 0) + 1;

      const newEmployee = {
        id: newId,
        name: action.payload.name,
        avatarUri: action.payload.avatarUri,
      };

      // Thêm vào dataEmployees
      state.dataEmployees.push(newEmployee); //=> thu vien Immer tu dong xu ly sao chep mang state ben trong

      // Nếu không có bộ lọc, thêm nhân viên vào filteredEmployees
      state.filteredEmployees.push(newEmployee);
    },

    // update nhân viên ( khi bấm Lưu)

    updateEmployee: (state, action) => {
      // đặt như vầy thì bên trên initialState không cần khai báo, và cũng không cần export bên dưới vẫn mang dữ liêu xuống dùng được dưới component
      state.selectEmployee = action.payload;
      // console.log(action.payload)
       // // dung findIndex hay filter deu duoc
      editedNeedEmployee = state.dataEmployees.findIndex(
        (item) => item.id === action.payload.id
      );
    
    },
    // bấm lưu update nhân viên

    handleSaveUpdateEmployee: (state, action) => {
    // dung findIndex hay filter deu duoc
      const index = state.dataEmployees.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("Vị trí nhân viên cần phải thay đổi khi lưu", index);
      // index !== -1 la để kiểm tra có phần tử nào thỏa điều kiện này trong mảng không
      if (index !== -1) {
        state.dataEmployees[index] = action.payload;
        state.filteredEmployees[index] = action.payload;
      }
    },
    //
    filterEmployee: (state, action) => {
      const searchTerm = action.payload.toLowerCase(); // Chuẩn hóa từ khóa tìm kiếm
      state.addedEmployees = state.dataEmployees.filter(
        (employee) => employee.name.toLowerCase().includes(searchTerm) // Lọc theo tên
      );
    },

    // Xóa bộ lọc (reset filteredEmployees về danh sách ban đầu)
    resetFilter: (state) => {
      state.filteredEmployees = state.dataEmployees; // Xóa bộ lọc và trả lại danh sách ban đầu
    },
  },
});

export const {
  addEmployee,
  filterEmployee,
  resetFilter,
  updateEmployee,
  handleSaveUpdateEmployee,
} = employeesSlice.actions;
export default employeesSlice.reducer;
