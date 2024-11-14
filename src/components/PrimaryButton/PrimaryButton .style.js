import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
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
    alignItems: "center",
    borderRadius: 25,
    ...StyleSheet.absoluteFillObject, // Đảm bảo chữ hiển thị trên gradient
  },
  buttonText: {
    zIndex:3,
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    textAlign: 'center',
  },
});
