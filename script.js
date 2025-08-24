const form = document.querySelector('.newsletter-form');
const signUpCard = document.querySelector('.newsletter-container');
const thankYouCard = document.getElementById('thankyou-card');
const userEmailSpan = document.getElementById('user-email');
const dismissMessage = document.querySelector('#dismiss-button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailAddress = document.getElementById('email-address').value.trim();
    userEmailSpan.textContent = emailAddress;

    signUpCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
});

dismissMessage.addEventListener('click', () => {
    thankYouCard.style.display = 'none';
    signUpCard.style.display = 'flex';
});