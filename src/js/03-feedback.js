import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FORM_STORAGE_KEY = 'feedback-form-state';
let formObj = {};

if (localStorage.getItem(FORM_STORAGE_KEY)) {
  const parsedStorageObj = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  const email = parsedStorageObj.email;
  const message = parsedStorageObj.message;

  if (email) {
    formObj.email = email;
    formEl.elements.email.value = email;
  }

  if (message) {
    formObj.message = message;
    formEl.elements.message.value = message;
  }
}

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const key = e.target.name;
  const value = e.target.value;

  formObj[key] = value;
  const stringifiedFormObj = JSON.stringify(formObj);

  localStorage.setItem(FORM_STORAGE_KEY, stringifiedFormObj);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formObj.email);
  console.log(formObj.message);
    if(formObj.email && formObj.message){
  const parsedStorageObj = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  console.log(parsedStorageObj);
  localStorage.removeItem(FORM_STORAGE_KEY);

  e.target.reset();
  formObj = {};
    }
}
