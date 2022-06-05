import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsView } from '../views/negociations-view.js';
import { MessageView } from '../views/message-view.js';

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private forms: HTMLFormElement;
  private negociations: Negociations;
  private negociationsView = new NegociationsView('#negociationsView');
  private messageView = new MessageView('#mensagemView');

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.forms = document.querySelector('.form');
    this.negociations = new Negociations();
    this.negociationsView.update(this.negociations);
  }

  add(): void {
    this.negociations.save(this.createNegociation());
    this.cleanForms();
    this.negociationsView.update(this.negociations);
    this.messageView.update('Negociação adicionada com sucesso!');
  }

  createNegociation(): Negociation {
    return new Negociation(
      new Date(this.inputDate.value.replace('-', ',')),
      Number(this.inputQuantity.value),
      Number(this.inputValue.value)
    );
  }

  cleanForms(): void {
    this.forms.reset();
    this.inputDate.focus();
  }
}
