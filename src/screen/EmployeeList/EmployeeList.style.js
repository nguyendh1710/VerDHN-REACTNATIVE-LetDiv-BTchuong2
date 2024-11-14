<<<<<<< HEAD
import { StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
  container: {
   
    display: "flex",
    maxWidth: 375,
    paddingTop: 24,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    // fontFamily: "Roboto, sans-serif",
  },
  content: {
    zIndex: 10,
    display: "flex",
    width: "100%",
    paddingLeft: 23,
    paddingRight: 23,
    
    flexDirection: "column",
    alignItems: "stretch",
  },
  header: {
 
  },
=======
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
   flex:1,
    position:'relative',
    paddingTop: 24,

  },
  content: {
    flex:1, // phai cho content flex:1 de no chiem het khong gian neu khong se day cac thanh phan khac xuong duoi nhu floatbutton
    width: "100%",
    paddingLeft: 23,
    paddingRight: 23,
    flexDirection: "column",
    alignItems: "stretch",
  },
 
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  title: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 26,
    fontWeight: "700",
  },
  searchContainer: {
<<<<<<< HEAD

    marginTop: 18,
     paddingRight: 95,
    justifyContent:'start',
=======
   
    marginTop: 18,
    paddingRight: 95,
    justifyContent: "start",
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
    fontSize: 18,
    color: "rgba(206, 212, 218, 1)",
    fontWeight: "400",
  },
  searchBox: {
<<<<<<< HEAD
    
=======
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
    borderRadius: 29,
    borderColor: "rgba(134, 142, 150, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    width: 290,
<<<<<<< HEAD
    // marginRight: -14,
    // paddingLeft: 56,
    // paddingRight: 56,
    paddingHorizontal: 8,
    // paddingTop: 10,
    // paddingBottom: 30,
    paddingVertical: 8,
    marginBottom: 19,
    height: 80,
    flexDirection:'row',
    alignItems:'center',

    
=======
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 19,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  },
  searchInput: {
    fontSize: 22,
    color: "rgba(73, 80, 87, 1)",
    paddingTop: 10,
<<<<<<< HEAD
    flex: 1,
  },
  searchIcon: {
    // position: "relative",
   
   height:30,
    // maxWidth: "100%",
    // aspectRatio: 1,
    // marginHorizontal: 20,
    // marginVertical: -80,
  },
  listContainer:{

   
    // marginTop: 69,
    // marginVertical: 20,
  
  },
  divider: {
    borderRadius: 19,
    position: "relative",
    display: "flex",
    marginTop: 5,
    aspectRatio: 3.02,
  },
=======

  },
  searchIcon: {
    
    height: 30,
 
  },
 
  divider: {
    borderRadius: 19,
    marginTop: 5,
    aspectRatio: 3.02,
  },

>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
});
