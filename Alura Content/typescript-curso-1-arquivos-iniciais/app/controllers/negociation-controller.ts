import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private forms: HTMLFormElement;
  private negociations: Negociations;

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.forms = document.querySelector('.form');
    this.negociations = new Negociations();
  }

  add(): void {
    this.negociations.save(this.createNegociation());
    this.cleanForms();
    console.log(this.negociations.allNegociations);
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
