import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};
const FORM_DATA = 'feedback-form-state';

const userData = JSON.parse(localStorage.getItem(FORM_DATA)) || {};

refs.form.addEventListener('input', throttle(onFormFieldInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
autofillFields();

function onFormFieldInput(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA, JSON.stringify(userData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem(FORM_DATA);
}

function autofillFields() {
  if (userData.email) {
    refs.form.email.value = userData.email;
  }
  if (userData.message) {
    refs.form.message.value = userData.message;
  }
}
