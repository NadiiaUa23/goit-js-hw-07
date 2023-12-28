const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    //Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    //Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
  const categoryName = item.querySelector('h2').textContent;
  // і кількість елементів у категорії (усіх <li>, вкладених у нього).
  const categoryItemsCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}, Elements: ${categoryItemsCount}`);
});

