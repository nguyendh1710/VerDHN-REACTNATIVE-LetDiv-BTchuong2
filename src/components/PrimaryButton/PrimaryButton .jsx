import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./PrimaryButton .style";
import { LinearGradient } from "expo-linear-gradient";

export default function PrimaryButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <LinearGradient
<<<<<<< HEAD
          colors={["#FF922B", "#F76707"]}
=======
          colors={[ "#F76707", "#FF922B"]}
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
          style={styles.gradient}
        >
          {typeof children === "string" ? (
            <Text style={styles.buttonText}>{children}</Text>
          ) : (
            children
          )}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
<<<<<<< HEAD
////
=======
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
