/* eslint-disable indent */
/* eslint-disable no-use-before-define */
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
//* Impotr Функций
import { validate } from './helpers/validate';
import { showInputErr, removeInputErr } from './views/form';
import { login } from './services/auth.services';
import { notify } from './views/notyfications';
import { getNews } from './services/news.services';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', (e) => {
	// eslint-disable-next-line indent
  e.preventDefault();
	// eslint-disable-next-line indent
  onSubmit();
});
inputs.forEach((el) => el.addEventListener('focus', () => removeInputErr(el)));

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputErr(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;
  try {
    // show success notify
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    // show error notify
    notify({ msg: 'Login is faild', className: 'alert-danger' });
    // console.log(err);
  }
}
console.log(window);
