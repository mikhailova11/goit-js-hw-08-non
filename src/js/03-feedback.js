import throttle from 'lodash.throttle';

const storageDate = "feedback-form-state";

const localStorageDate = {
    email: '',
    message: '',
};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    submit: document.querySelector('button'),
};

refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));
refs.submit.addEventListener('submit', onFormSubmit);


const onEmailInput = function(e){
    localStorageDate.email=e.target.value;
    localStorage.setItem(storageDate, JSON.stringify(localStorageDate))
};
const onMessageInput = function (e){
    localStorageDate.message=e.target.value;
    localStorage.setItem(storageDate, JSON.stringify(localStorageDate))
};
const onFormSubmit= function (e){
    e.preventDefault();

    if (localStorage.getItem(storageDate)) {
        console.log(localStorage.getItem(storageDate))
    }
    e.currentTarget.reset();
    localStorage.removeItem(storageDate)
};
const saveData = function(){
    let savedData = JSON.parse(localStorage.getItem(storageDate))
    if (savedMessage) {
        localStorageDate.email = savedData.email;
        localStorageDate.message = savedData.message;
        refs.email.value = localStorageDate.email;
        refs.message.value = localStorageDate.message;
    }
};
console.log(saveData);