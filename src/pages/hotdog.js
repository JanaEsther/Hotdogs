export const toppings = [
  { name: 'Hořčice', price: 5, selected: false },
  { name: 'Kečup', price: 5, selected: false },
  { name: 'Cibule', price: 5, selected: false },
  { name: 'Okurka', price: 5, selected: false },
  { name: 'Paprika', price: 5, selected: false },
  { name: 'Rajče', price: 5, selected: false },
  { name: 'Chilli', price: 5, selected: false },
  { name: 'Sýr', price: 10, selected: false },
  { name: 'Slanina', price: 10, selected: false },
];

export const renderToppings = () => {
  document.body.innerHTML = '';
  toppings.forEach((item) => {
    const toppingClass = item.selected
      ? 'topping topping--selected'
      : 'topping';

    document.body.innerHTML += `
    <div class="${toppingClass}">
      <h3>${item.name}</h3>
      <p>${item.price} Eur</p>
    </div>
  `;
  });
  document.querySelectorAll('.topping').forEach((element, index) => {
    element.addEventListener('click', () => {
      toggleToppings(index);
    });
  });
};

export const toggleToppings = (index) => {
  toppings[index].selected = !toppings[index].selected;
  renderToppings();
};
