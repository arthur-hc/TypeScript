import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
export class NegociationController {
    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.forms = document.querySelector('.form');
        this.negociations = new Negociations();
    }
    add() {
        this.negociations.save(this.createNegociation());
        this.cleanForms();
        console.log(this.negociations.allNegociations);
    }
    createNegociation() {
        return new Negociation(new Date(this.inputDate.value.replace('-', ',')), Number(this.inputQuantity.value), Number(this.inputValue.value));
    }
    cleanForms() {
        this.forms.reset();
        this.inputDate.focus();
    }
}
