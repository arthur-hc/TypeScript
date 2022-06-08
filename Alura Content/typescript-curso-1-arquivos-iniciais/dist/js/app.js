import { NegociationController } from './controllers/negociation-controller.js';
const controller = new NegociationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw new Error('Form not found');
}
