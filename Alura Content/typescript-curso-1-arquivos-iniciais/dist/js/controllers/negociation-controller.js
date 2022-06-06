import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsView } from '../views/negociations-view.js';
import { MessageView } from '../views/message-view.js';
export class NegociationController {
    constructor() {
        this.negociationsView = new NegociationsView('#negociationsView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.forms = document.querySelector('.form');
        this.negociations = new Negociations();
        this.negociationsView.update(this.negociations);
    }
    add() {
        const negociation = this.createNegociation();
        if (negociation.date.getDay() > 0 && negociation.date.getDay() < 6) {
            this.negociations.save(this.createNegociation());
            this.cleanForms();
            this.refreshView();
        }
        else {
            this.messageView.update('Não é possível cadastrar negociações fora do dia útil.');
        }
    }
    createNegociation() {
        return new Negociation(new Date(this.inputDate.value.replace('-', ',')), Number(this.inputQuantity.value), Number(this.inputValue.value));
    }
    cleanForms() {
        this.forms.reset();
        this.inputDate.focus();
    }
    refreshView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update('View atualizada com sucesso!');
    }
}
