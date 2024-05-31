const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:');
let newName = coffeeName.toLowerCase();
newName = newName.replace(newName[0], newName[0].toUpperCase());
coffees.indexOf(newName) >= 0 ? alert(`Держите ваш любимый кофе ${newName}. Он ${coffees.findIndex((name) => {return name === newName})+1}-й по популярности в нашей кофейне.`) :
        alert('К сожалению, такого вида кофе нет в наличии.');