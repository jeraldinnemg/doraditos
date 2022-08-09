const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navMenu');


navToggle.addEventListener('click', () => {
    navigation.classList.toggle('navMenu--visible');
    console.log('click on menu');
})