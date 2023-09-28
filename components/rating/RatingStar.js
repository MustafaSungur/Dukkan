import React from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./RatingStar.style";

export default function RatingStar({ rating }) {
  const rate = rating.rate;
  const reviews = rating.count;

  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        defaultRating={rate}
        size={15}
        showRating={false}
        isDisabled={true}
        halfStarEnabled={true}
        selectedColor="#f1c40f" // Yıldızları boyamak için kullanılan renk
      />
      <Text style={styles.ratingText}>{reviews}</Text>
    </View>
  );
}
