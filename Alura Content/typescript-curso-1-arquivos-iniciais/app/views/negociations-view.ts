import { Negociation } from '../models/negociation';
import { Negociations } from '../models/negociations';

export class NegociationsView {
  private element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }
  template(model: Negociations): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${model.allNegociations
          .map((negociation: Negociation) => {
            return `
          <tr>
            <td>${negociation.date}</td>
            <td>${negociation.quantity}</td>
            <td>${negociation.value}</td>
          </tr>`;
          })
          .join('')}
      </tbody>
    </table>
    `;
  }

  update(model: Negociations): void {
    this.element.innerHTML = this.template(model);
  }
}
