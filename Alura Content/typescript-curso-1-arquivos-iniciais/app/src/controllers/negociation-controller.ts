import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsView } from '../views/negociations-view.js';
import { MessageView } from '../views/message-view.js';
import { daysOfWeek } from '../enums/daysOfWeek.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private forms: HTMLFormElement;
  private negociations: Negociations;
  private negociationsView = new NegociationsView('#negociationsView', true);
  private messageView = new MessageView('#mensagemView');

  constructor() {
    this.inputDate = <HTMLInputElement>document.querySelector('#data');
    this.inputQuantity = document.querySelector(
      '#quantidade'
    ) as HTMLInputElement;
    this.inputValue = <HTMLInputElement>document.querySelector('#valor');
    this.forms = <HTMLFormElement>document.querySelector('.form');
    this.negociations = new Negociations();
    this.negociationsView.update(this.negociations);
  }

  @logExecutionTime()
  public add(): void {
    const negociation = Negociation.create(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.isUtilDay(negociation.date.getDay())) {
      this.messageView.update(
        'Não é possível cadastrar negociações fora do dia útil.'
      );
      return;
    }
    this.negociations.save(negociation);
    this.cleanForms();
    this.refreshView();
  }

  private cleanForms(): void {
    this.forms.reset();
    this.inputDate.focus();
  }

  private refreshView(): void {
    this.negociationsView.update(this.negociations);
    this.messageView.update('View atualizada com sucesso!');
  }

  isUtilDay(day: number): boolean {
    return day > daysOfWeek.SUNDAY && day < daysOfWeek.SATURDAY;
  }
}
