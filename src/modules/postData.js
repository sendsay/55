const postData = () => {
  return fetch('http://localhost:3000/goods', {
    method: 'POST',
    body: JSON.stringify({
      title: "Ведьтак 3",
      price: 30000,
      sale: false,
      img: "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
      hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg",
      category: "Игры и софт"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());

}
export default postData;