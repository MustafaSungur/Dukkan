import { FlatList, SafeAreaView, View } from "react-native";
import ProductCard from "../../components/productCard";
import usefetch from "../../hooks/useFetch/useFetch";
import { API_URL } from "@env";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Input from "../../components/input";
import styles from "./Products.styles";
import { useState, useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FilterPopup from "../../components/filterPoup";
import Sort from "../../middleWare/Sort";
import FilterCategory from "../../components/filterCategory";
import useGetCategories from "../../hooks/useGetCategories";
import FilterByCatagory from "../../middleWare/FilterByCatagory";

const Products = ({ navigation }) => {
  const { data, loading, error } = usefetch(API_URL);
  const { categories } = useGetCategories(
    "https://fakestoreapi.com/products/categories"
  );
  const [search, setSearch] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [refleshing, setRefleshing] = useState(false);
  const listRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setSearch(data);
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const navigateDetail = (id) => {
    navigation.navigate("DetailPage", { id });
  };
  const renderItem = ({ item }) => (
    <ProductCard product={item} onSelect={() => navigateDetail(item.id)} />
  );

  const onSearch = (text) => {
    if (text === "") {
      setSearch(data);
    } else {
      setSearch(
        data.filter((product) =>
          product.title.toLowerCase().includes(text.toLowerCase())
        )
      );
      setActive(false);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const modalPress = (id) => {
    setSearch(Sort(data, id));
    listRef.current.scrollToIndex({ animated: true, index: 0 });
    setModalVisible(false);
    setActive(false);
  };

  const categoryPress = (category) => {
    const newData = FilterByCatagory(category, data);
    setSearch(newData);
  };
  const handleReflesh = () => {
    setRefleshing(true);
    setSearch(data);
    setActive(false);
    setRefleshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Input onSearch={onSearch} />
        <Ionicons name="filter-outline" size={25} onPress={toggleModal} />
      </View>
      <FilterCategory
        categories={categories}
        onPress={categoryPress}
        setActive={setActive}
        active={active}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={search}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ref={listRef}
        ListFooterComponent={() => <View style={{ height: 100 }}></View>}
        refreshing={refleshing}
        onRefresh={handleReflesh}
      />
      <FilterPopup
        toggleModal={toggleModal}
        isVisible={isModalVisible}
        onPress={modalPress}
      />
    </SafeAreaView>
  );
};

export default Products;
