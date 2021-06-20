import CardManager from './CardManager';

const cardmanager = new CardManager(document.querySelector('.cardmanager'));
cardmanager.bindToDOM();
cardmanager.cards = [
  [
    'Welcome to Trello!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing.',
  ],
  [
    'This is a card.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ducimus atque!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor commodi doloribus vero eligendi sequi voluptas odio? Iste, porro! Deserunt quos consectetur animi itaque voluptatibus praesentium.',
  ],
  [
    'Try dragging cards anywere.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ducimus atque!',
  ],
];

cardmanager.renderingItem();
