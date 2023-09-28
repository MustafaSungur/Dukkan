import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./ProductCard.styles";
import RatingStar from "../rating/RatingStar";
const ProductCard = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${product.image}`,
          }}
        />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{product.title}</Text>
          <RatingStar rating={product.rating} />
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
