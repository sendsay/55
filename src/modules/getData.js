const getData = () => {
  return fetch('https://test-d8970-default-rtdb.firebaseio.com/goods.json')

    .then((response => {
      return response.json();
    }));

}
export default getData;