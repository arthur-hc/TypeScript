import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { NegociationsView } from '../views/negociations-view.js';
import { MessageView } from '../views/message-view.js';
import { daysOfWeek } from '../enums/daysOfWeek.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegociationDay } from '../interfaces/negociation-day.js';
import { NegociationsService } from '../services/negociations-service.js';

export class NegociationController {
  @domInjector('#data')
  private inputDate: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantity: HTMLInputElement;

  @domInjector('#valor')
  private inputValue: HTMLInputElement;

  private forms: HTMLFormElement;
  private negociations: Negociations;
  private negociationsView = new NegociationsView('#negociationsView');
  private messageView = new MessageView('#mensagemView');
  private service = new NegociationsService();

  constructor() {
    this.forms = <HTMLFormElement>document.querySelector('.form');
    this.negociations = new Negociations();
    this.negociationsView.update(this.negociations);
  }

  async importData(): Promise<void> {
    const negociationsDay = await this.service.getNegociationsDay();
    negociationsDay.forEach((negociation: Negociation): void => {
      this.negociations.save(negociation);
    });
    this.refreshView();
  }

  @inspect
  @logExecutionTime(true)
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
