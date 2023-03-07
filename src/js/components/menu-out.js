const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const iconClose = document.querySelector('.icon-close');


const pulOut = [
  { right: '0px', },
  { transition: '600ms' },
];

const pullIn = {
  right: '200px',
  transition: '600px',
};





    //console.log(iconMenu);
    console.log(menu);
    console.log(body);
    console.log(iconClose);
    //console.log();
    /* выбираем класс icon-menu и
             добавляем метод click с функцией, вызываемой при клике */

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    console.log(iconMenu)
//menu.animate(pullIn);
menu.style.right = '0px';
menu.style.transition = '600ms';
body.style.right ='300px';
body.style.transition = '600ms';
  })
}
if (iconClose) {
  iconClose.addEventListener('click', () => {
    menu.style.right = '-300px';
    menu.style.transition = '600ms';
    body.style.right ='0px';
    body.style.transition = '600ms';
  })
}
