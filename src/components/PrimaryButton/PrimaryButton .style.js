import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    borderRadius: 31,
    marginTop: 33,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 12,
    paddingBottom: 12,
    
  },
  gradient: {
    width: 300,
    height: 30,
    padding: 25,
=======
    alignItems: "center",
    justifyContent: "center",
    width: 290,
    height: 42,
  
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10, // Dành cho Android
    borderRadius: 20,
  },
  gradient: {
   
    width: 290,
    height: 42,
   
    padding: 15,
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
    alignItems: "center",
    borderRadius: 25,
    ...StyleSheet.absoluteFillObject, // Đảm bảo chữ hiển thị trên gradient
  },
  buttonText: {
<<<<<<< HEAD
    zIndex:3,
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    textAlign: 'center',
=======
    zIndex:9,
    position: "absolute",
    bottom: 5,
    paddingVertical:10,
    zIndex: 1, // Đảm bảo chữ hiển thị trên gradient
    color: "#ffff",
    fontWeight: "700",
    fontSize: 20,
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  },
});
