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

refs.form.addEventListener('submit', onFormSubmit);

refs.email.addEventListener('input', throttle((e) => {
    localStorageDate.email=e.target.value;
    localStorage.setItem(storageDate, JSON.stringify(localStorageDate));
}, 500));


refs.message.addEventListener('input', throttle((e) => {
    localStorageDate.message=e.target.value;
    localStorage.setItem(storageDate, JSON.stringify(localStorageDate));
}, 500));

 function onFormSubmit (e){
    e.preventDefault();

    if (localStorage.getItem(storageDate)) {
        console.log(localStorage.getItem(storageDate))
    }
    e.currentTarget.reset();
    localStorage.removeItem(storageDate)
};

function saveData () {
    let savedData = JSON.parse(localStorage.getItem(storageDate))
    if (savedData) {
        localStorageDate.email = savedData.email;
        localStorageDate.message = savedData.message;
        refs.email.value = localStorageDate.email;
        refs.message.value = localStorageDate.message;
    }
    return;
};
