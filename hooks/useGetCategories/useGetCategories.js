import axios from "axios";
import { useEffect, useState } from "react";

const useGetCategories = (url) => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoading] = useState(true);
  const [errorCategories, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);

      setCategories(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { categories, loadingCategories, errorCategories };
};

export default useGetCategories;
