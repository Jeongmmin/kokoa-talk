const colorInput = document.getElementById('color');

const text = document.querySelector('.text');

const btn = document.querySelector('.btn');

// console.log(colorInput.value);

function chooseColor(e) {
  e.preventDefault();
  text.innerHTML = colorInput.value;
}

btn.addEventListener('click', chooseColor);
