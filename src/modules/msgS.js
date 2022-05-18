const msgS = () => {
  const msgBtn = document.querySelector('.catalog-button_text');

  const showMsg = () => {
    alert('This is MSG!!!');
  }

  msgBtn.addEventListener('click', showMsg);
}

export default msgS;

