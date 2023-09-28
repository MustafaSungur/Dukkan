import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import styles from "./FilterCategory.styles";
export default function FilterCategory({
  categories,
  onPress,
  setActive,
  active,
}) {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {categories.map((category, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              setActive(index);
              onPress(category);
            }}
          >
            <Text
              style={active === index ? styles.activeCategory : styles.category}
            >
              {category}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
