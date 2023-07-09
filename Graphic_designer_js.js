// For popup image show when clicked
var popup= document.getElementById('pop-up-id');
var popup2= document.getElementById('pop-up-id2');
document.querySelectorAll('.row .col-3').forEach(inner_div2 => {
  inner_div2.onclick = () =>{
    popup2.innerHTML=   '<span href="javascript:void(0);" onclick="popupfun()">&times;</span>'+ inner_div2.innerHTML;
    document.querySelector('.popup-image').style.display= 'block';
  }
})
function popupfun(){
  popup.style.display= 'none';
}