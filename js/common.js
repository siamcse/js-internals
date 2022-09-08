const $ = (id) => document.getElementById(id);

const setLocalStorage = (id,keyName) =>{
    const inputField = $(id);
    const inputValue = inputField.value;
    localStorage.setItem(keyName,inputValue);
}