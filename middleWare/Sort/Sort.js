export default function Sort(data, id) {
  // Yeni bir kopya oluştur
  const sortedData = [...data];

  if (id === "SORTNAME") {
    return sortedData.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (id === "HIGHTTOLOW") {
    return sortedData.sort((a, b) => b.price - a.price);
  }

  if (id === "LOWTOHIGHT") {
    return sortedData.sort((a, b) => a.price - b.price);
  }

  if (id === "SORTRATE") {
    return sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return sortedData;
}
