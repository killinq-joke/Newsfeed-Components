/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu(dataArg) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  
  menu.append(list);
  list.append(li1);
  list.append(li2);
  list.append(li3);
  list.append(li4);
  list.append(li5);
  list.append(li6);

  menu.classList.add('menu');

  // const arrList = document.querySelectorAll('.menu li');
 
  // for(let i = 0; i < dataArg.length; i++ ) {
  //   arrList[i].textContent = dataArg[i];
  // }
  li1.textContent = dataArg[0];
  li2.textContent = dataArg[1];
  li3.textContent = dataArg[2];
  li4.textContent = dataArg[3];
  li5.textContent = dataArg[4];
  li6.textContent = dataArg[5];
  const menuBtn = document.querySelector('img.menu-button');
  console.log(menu);
  menuBtn.addEventListener('click', e => {
    
    menu.classList.toggle('menu--open');
  })
  

  return menu;
}
// const menuCon = createMenu(menuItems);
// console.log(createMenu(menuItems));
console.log(createMenu(menuItems));
document.querySelector('body').append(createMenu(menuItems));

// console.log(createMenu(menuItems));

// console.log(menu);
// const arrList = document.querySelectorAll('.menu li');


// menuItems.forEach(d => .append(createMenu(d)));


  // console.log(arrList);


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
