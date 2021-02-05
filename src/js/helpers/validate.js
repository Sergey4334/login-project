/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
const regExpDis = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^[0-9a-zA-Z]{4,}$/,
};
/**
 * Function validate
 * @param{HTMLInputElement} el
 * @returns{Boolean} - Some description
 */

export function validate(el) {
  const regExpName = el.dataset.required;
  if (!regExpDis[regExpName]) return true;
  return regExpDis[regExpName].test(el.value);
}
