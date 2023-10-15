



const $ = document;
const header = $.querySelector('header');


window.addEventListener('scroll',()=>{
  if(document.documentElement.scrollTop > 20 || document.scrollTop > 20){
    header.classList.add('show');
  }else{
    header.classList.remove('show');
  }
})