import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Detail.styles";
import { API_URL } from "@env";
import Loading from "../../components//loading";
import Error from "../../components/error";
import usefetch from "../../hooks/useFetch";
import RatingStar from "../../components/rating";
const Detail = ({ route }) => {
  const { id } = route.params;
  const { data, loading, error } = usefetch(`${API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: data.image }} />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <View style={styles.innerContent}>
          <RatingStar rating={data.rating} />
          <Text style={styles.price}>${data.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
