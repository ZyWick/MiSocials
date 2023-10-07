const gradient = document.querySelector('body');
window.addEventListener('scroll', () => {
  deg = 172 + (window.scrollY / 5)
  gradient.style.background = `linear-gradient(${deg}deg, rgba(21,2,34,1) 19%, rgba(253,29,29,1) 65%, rgba(177,24,24,1) 100%)`;
});