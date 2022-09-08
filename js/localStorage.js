$('btn-name-add').addEventListener('click',function(){
    setLocalStorage('name-field','name');
})
$('btn-age-add').addEventListener('click',function(){
    setLocalStorage('age-field','age');
})
$('btn-name-remove').addEventListener('click',function(){
   localStorage.removeItem('name'); 
})
$('btn-age-remove').addEventListener('click',function(){
   localStorage.removeItem('age'); 

})
$('clear-all').addEventListener('click',function(){
   localStorage.clear(); 

})