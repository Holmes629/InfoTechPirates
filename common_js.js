// for prelaoding before loading 
var loader= document.getElementById('preloader');
window.addEventListener('load', function(){
  loader.style.display= 'none'
})
// for menu button
var menu2= document.getElementById('menu_ls_id');
var men_but= document.getElementById('menu_id');
var count= 0;
function menu() {
  if (count==0){
    menu2.className= 'menu_ls_selected';
    men_but.innerHTML= '&#10060;';
    count= 1;
  }
  else {
    count= 0;
    men_but.innerHTML= '&#9776;';
    menu2.className= 'menu_ls';
  }
}