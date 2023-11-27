export const app = document.querySelector('#app');
export const header: HTMLElement = document.createElement('header');
export const main: HTMLElement = document.createElement('main');

//!INPUTS
export const firstValue: HTMLInputElement = document.createElement('input');
export const resultValue: HTMLInputElement = document.createElement('input');

//!SELECT & OPTIONS
export const firstSelectValue: HTMLSelectElement =
  document.createElement('select');
export const secondSelectValue: HTMLSelectElement =
  document.createElement('select');
export const optionDollar: HTMLOptionElement = document.createElement('option');
export const optionEuro: HTMLOptionElement = document.createElement('option');
export const optionUah: HTMLOptionElement = document.createElement('option');
export const convertBtn: HTMLButtonElement = document.createElement('button');
export const optionDollarSecond: HTMLOptionElement =
  document.createElement('option');
export const optionEuroSecond: HTMLOptionElement =
  document.createElement('option');
export const optionUahSecond: HTMLOptionElement =
  document.createElement('option');

//! OPTION ATTRIBUTES
optionEuro.value = '€';
optionEuro.text = '€';
optionDollar.value = '$';
optionDollar.text = '$';
optionUah.value = '₴';
optionUah.text = '₴';

optionEuroSecond.value = '€';
optionEuroSecond.text = '€';
optionDollarSecond.value = '$';
optionDollarSecond.text = '$';
optionUahSecond.value = '₴';
optionUahSecond.text = '₴';

//! INPUTS ATTRIBUTES
firstValue.id = 'first__value';
firstValue.placeholder = 'first value';
resultValue.id = 'result__value';

resultValue.setAttribute('disabled', '');
firstSelectValue.id = 'first__select__value';
secondSelectValue.id = 'second__select__value';

//!BTN ATTRIBUTES

convertBtn.className = 'convert__btn';
convertBtn.textContent = 'convert';
