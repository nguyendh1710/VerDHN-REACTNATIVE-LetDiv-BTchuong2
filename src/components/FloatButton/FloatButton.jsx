import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from './FloatButton.style';
import { LinearGradient } from 'expo-linear-gradient';



export default function FloatButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
<<<<<<< HEAD
    <View style={styles.container}>
      <LinearGradient
        colors={['#F76707', '#FF922B']}
        style={styles.gradient}
      >
        <Text>
          <Icon name="add" size={30} color="#000" />
        </Text>
      </LinearGradient>
    </View>
  </TouchableOpacity>
  
=======
      <View style={styles.container}>
      <LinearGradient
                colors={['#F76707', '#FF922B']}
                style={styles.gradient}
            >
        <Text>
          <Icon name="add" size={30} color="#FFFFFF" />
        </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
>>>>>>> 903c2cd4d5e3be399f857e14c1aa988fa3d7f884
  );
}
