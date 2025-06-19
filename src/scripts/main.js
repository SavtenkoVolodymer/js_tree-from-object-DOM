'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (data[key]) {
      const ul = document.createElement('ul');

      createTree(ul, data[key]);
      li.appendChild(ul);
    }
    element.appendChild(li);
  }
}

createTree(tree, food);
