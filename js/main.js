
const $ = document;
const header = $.querySelector('header');
window.addEventListener('scroll',()=>{
  if(document.documentElement.scrollTop > 20 || document.scrollTop > 20){
    header.classList.add('show');
  }else{
    header.classList.remove('show');
  }
})


const heart =  $.querySelectorAll('.heart-icon');
let flage = true;

heart.forEach(item=>{
  item.addEventListener('click',()=>{
    if(flage){
      item.src = './assets/icons/Vector (3).svg';
      flage = false;
    }else{
      item.src = 'assets/icons/fi-rr-heart.svg';
      flage = true;
    }
  })
})