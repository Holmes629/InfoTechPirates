// For popup image show when clicked
var popup= document.getElementById('pop-up-id');
document.querySelectorAll('.row .col-2').forEach(inner_div2 => {
  inner_div2.onclick = () =>{
    popup.innerHTML=   '<span href="javascript:void(0);" onclick="popupfun()">&times;</span>'+ inner_div2.innerHTML;
    document.querySelector('.popup-image').style.display= 'flex';
  }
})
function popupfun(){
  popup.style.display= 'none';
}