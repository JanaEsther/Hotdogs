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
  const topping = document.querySelector('toppings');
  toppings.innerHTML += '';
  if (topping.selected) {
    topping.classList = '.topping--selected';
  }
  toppings.forEach((topping) => {
    document.body.innerHTML += `<div>
    <h3>${topping.name}</h3>
    <p>${topping.price} Eur</p>
    </div>`;
  });
};

export const toggleTopping = (index) => {
  toppings[index].selected = !toppings[index].selected;
  renderToppings(toppings);
};
