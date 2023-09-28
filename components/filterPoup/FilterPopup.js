import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./FilterPopup.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";

function FilterPopup({ toggleModal, isVisible, onPress }) {
  return (
    <Modal
      onBackdropPress={toggleModal}
      isVisible={isVisible}
      style={styles.modal}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sort</Text>

          <TouchableOpacity onPress={toggleModal}>
            <Ionicons name="close-outline" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.inner_container}>
          <TouchableOpacity
            style={styles.sortName}
            onPress={() => onPress("SORTNAME")}
          >
            <Text style={styles.sortNameText}>Sort By Name</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sortName}
            onPress={() => onPress("HIGHTTOLOW")}
          >
            <Text style={styles.sortNameText}>Hight to Low Price</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sortName}
            onPress={() => onPress("LOWTOHIGHT")}
          >
            <Text style={styles.sortNameText}>Low to Hight Price</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sortName}
            onPress={() => onPress("SORTRATE")}
          >
            <Text style={styles.sortNameText}>Sort By Rate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default FilterPopup;
