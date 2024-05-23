const buttons = document.querySelectorAll('button');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);

const form = modal.querySelector('#contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  console.log('Ім\'я:', name, 'Email:', email);
  
  closeModal();
});