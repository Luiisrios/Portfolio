// hover left and right
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
//when mouse hover class wil lenter
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
// class will be removed after mouse leaves
left.addEventListener('mouseleave',() =>{
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter',() =>{
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave',() =>{
    container.classList.remove('hover-right');
});