// show password by icon
const passInput = document.getElementById('password');
const iconPassLink = document.querySelector('.iconPassLink');

console.log(passInput, iconPassLink);

function showPass(e) {
  e.preventDefault();
  if (passInput.type === 'password') {
    iconPassLink.classList.add('show');
    passInput.type = 'text';
  } else {
    iconPassLink.classList.remove('show');
    passInput.type = 'password';
  }
}
iconPassLink.addEventListener('click', showPass);
