// show password by icon
const passInput = document.getElementById('loginPass');
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
// alert(`HELLO WORLD`);
passInput.addEventListener('change', e => {
  let x = e.target.value;
  x = x.split('');
  console.log(x);
  console.log(x.length);
  setTimeout(() => {
    passInput.type = 'password';
  }, 1000);
});
