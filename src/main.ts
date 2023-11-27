import {
  app,
  optionDollar,
  optionEuro,
  optionUah,
  resultValue,
  firstValue,
  firstSelectValue,
  main,
  convertBtn,
  secondSelectValue,
  optionDollarSecond,
  optionEuroSecond,
  optionUahSecond,
} from './constants';

import './style.css';

let counter = 0;
let isActive = true;

setInterval(() => {
  isActive = false;
  if (!isActive) {
    createModalWindow(main);
    isActive = true;
  }
  console.log(isActive);
}, 20000);

firstValue.addEventListener('change', (e: Event) => {
  if (counter !== 3) {
    e.preventDefault();
    exchangeListener();
    counter++;
    console.log(counter);
  } else {
    createModalWindow(main);
  }
});
convertBtn.addEventListener('click', (e: Event) => {
  if (counter !== 3) {
    e.preventDefault();
    exchangeListener();
    counter++;
    console.log(counter);
  } else {
    createModalWindow(main);
  }
});

firstSelectValue.addEventListener('change', () => {
  optionDollarSecond.disabled = false;
  optionUahSecond.disabled = false;
  optionEuroSecond.disabled = false;

  if (firstSelectValue.value === '$') {
    optionDollarSecond.disabled = true;
  } else if (firstSelectValue.value === '₴') {
    optionUahSecond.disabled = true;
  } else if (firstSelectValue.value === '€') {
    optionEuroSecond.disabled = true;
  }
});

app?.append(main);
firstSelectValue.append(optionDollar, optionEuro, optionUah);
secondSelectValue.append(optionDollarSecond, optionEuroSecond, optionUahSecond);
main.append(
  firstValue,
  resultValue,
  firstSelectValue,
  secondSelectValue,
  convertBtn
);
const exchangeLogic: Function = (
  firstValue: HTMLInputElement,
  firstSelectValue: HTMLInputElement,
  secondSelectValue: HTMLInputElement
) => {
  if (firstValue.value.length !== 0) {
    const exchangeRates: Record<string, Record<string, number>> = {
      $: { '€': 1.09, '₴': 0.028 },
      '€': { $: 0.91, '₴': 0.025 },
      '₴': { $: 37, '€': 40 },
    };

    const fromCurrency = firstSelectValue.value;
    const toCurrency = secondSelectValue.value;
    const amount = parseInt(firstValue.value);

    if (
      exchangeRates[fromCurrency] &&
      exchangeRates[fromCurrency][toCurrency]
    ) {
      const exchangeRate = exchangeRates[fromCurrency][toCurrency];
      const result = exchangeRate * amount;
      resultValue.placeholder = `${result}`;
    } else {
      console.error('can`t exchange this currency');
    }
  }
};
const exchangeListener: Function = () => {
  const firstValue = document.getElementById(
    'first__value'
  ) as HTMLInputElement;

  const firstSelectValue: HTMLInputElement = document.getElementById(
    'first__select__value'
  );
  const secondSelectValue: HTMLInputElement = document.getElementById(
    'second__select__value'
  );
  exchangeLogic(firstValue, firstSelectValue, secondSelectValue);
};
function createButtons(modalWindow: HTMLElement) {
  const buyTriesBtn = document.createElement('button') as HTMLButtonElement;
  buyTriesBtn.className = 'buy__tries__btn';
  buyTriesBtn.textContent = 'buy more tryes';
  buyTriesBtn.addEventListener('click', () => {
    if (modalWindow) {
      modalWindow.remove();
      counter = 0;
      isActive = true;
    }
  });
  const leaveBtn = document.createElement('button') as HTMLButtonElement;
  leaveBtn.className = 'leaveBtn';
  leaveBtn.textContent = 'Leave application';
  leaveBtn.addEventListener('click', () => {
    window.close();
  });
  const stayBtn = document.createElement('button') as HTMLButtonElement;
  stayBtn.className = 'stay__btn';
  stayBtn.textContent = 'Stay';
  stayBtn.addEventListener('click', () => {
    modalWindow.remove();
    isActive = true;
  });

  modalWindow.append(buyTriesBtn, leaveBtn, stayBtn);
}

function createModalWindow(main: HTMLElement) {
  const modalWindow = document.createElement('div') as HTMLElement;
  modalWindow.className = 'modal__window';
  createButtons(modalWindow);

  main.append(modalWindow);
}
