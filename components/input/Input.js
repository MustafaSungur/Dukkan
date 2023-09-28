import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#c4c0c0" />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default Input;
