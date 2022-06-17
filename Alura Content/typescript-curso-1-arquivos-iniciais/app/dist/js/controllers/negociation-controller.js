var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsView } from '../views/negociations-view.js';
import { MessageView } from '../views/message-view.js';
import { daysOfWeek } from '../enums/daysOfWeek.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';
export class NegociationController {
    constructor() {
        this.negociationsView = new NegociationsView('#negociationsView', true);
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.forms = document.querySelector('.form');
        this.negociations = new Negociations();
        this.negociationsView.update(this.negociations);
    }
    add() {
        const negociation = Negociation.create(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isUtilDay(negociation.date.getDay())) {
            this.messageView.update('Não é possível cadastrar negociações fora do dia útil.');
            return;
        }
        this.negociations.save(negociation);
        this.cleanForms();
        this.refreshView();
    }
    cleanForms() {
        this.forms.reset();
        this.inputDate.focus();
    }
    refreshView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update('View atualizada com sucesso!');
    }
    isUtilDay(day) {
        return day > daysOfWeek.SUNDAY && day < daysOfWeek.SATURDAY;
    }
}
__decorate([
    logExecutionTime()
], NegociationController.prototype, "add", null);
