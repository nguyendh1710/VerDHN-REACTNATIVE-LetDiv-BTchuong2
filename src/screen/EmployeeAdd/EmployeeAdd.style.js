import { StyleSheet } from "react-native";
<<<<<<< HEAD
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxWidth: 375,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 54,
    paddingBottom: 348,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 18,
    color: 'rgba(206, 212, 218, 1)',
    fontWeight: '400',
  },
  title: {
    color: 'rgba(73, 80, 87, 1)',
    fontSize: 26,
    fontWeight: '700',
  },
  inputContainer: {
    marginTop: 28,

  
  },
  label: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
  input: {
    marginVertical:10,
    borderRadius: 29,
    borderColor: 'rgba(134, 142, 150, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
  },
=======

export const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    width:600,
    height:900,
    // marginBottom: -40,
    marginTop: 40,
    marginHorizontal: 30,
    // marginVertical:80,
    backgroundColor:'#ffff',
  },

  title:{
     fontSize: 30,
     fontWeight: '700',
     marginBottom:40,
     justifyContent: 'center',
    //  position:'absolute',

  },
  inputContainer:{
    marginBottom:10,
 },
 buttonPosition:{
  paddingTop:20,
},
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
});
