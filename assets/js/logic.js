const sup = document.getElementById('signUp');
const sin = document.getElementById('signIn');
const container = document.getElementById('container');
sup.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
sin.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});