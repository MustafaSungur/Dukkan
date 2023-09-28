export default function FilterByCatagory(category, data) {
  const items = [...data];

  if (items && category) {
    return items.filter((item) => item.category === category);
  }
  return null;
}
