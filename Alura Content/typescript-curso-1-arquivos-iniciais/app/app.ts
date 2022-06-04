import { NegociationController } from './controllers/negociation-controller.js';
import { NegociationsView } from './views/negociations-view.js';

const controller = new NegociationController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  controller.add();
});
