import '../styles/modern-normalize.css';
import '../styles/style.css';


const scrollContainer = document.querySelector('.prices-scroll');
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');

btnLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({left: -300, behavior: 'smooth'});
});

btnRight.addEventListener('click', () => {
    scrollContainer.scrollBy({left: 300, behavior: 'smooth'});
});