const currency_one = document.getElementById("currency-one");
const amount_one = document.getElementById("amount-one");
const currency_two = document.getElementById("currency-two");
const amount_two = document.getElementById("amount-two");
const swap_button = document.getElementById("swap-button");
const rate_info = document.getElementById("rate-info");

calc = () => {
  const c_one_value = currency_one.value;
  const c_two_value = currency_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${c_one_value}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[c_two_value].toFixed(2);
      rate_info.innerHTML = `<p>1 ${c_one_value} = ${rate} ${c_two_value}</p>`;
      amount_two.value = (rate * amount_one.value).toFixed(2);
    });
};

swap = () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calc();
};

currency_one.addEventListener("change", calc);
currency_two.addEventListener("change", calc);
amount_one.addEventListener("input", calc);
swap_button.addEventListener("click", swap);
