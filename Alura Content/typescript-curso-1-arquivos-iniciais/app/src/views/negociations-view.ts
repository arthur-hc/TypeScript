import { Negociation } from '../models/negociation';
import { Negociations } from '../models/negociations';
import { View } from './view.js';

export class NegociationsView extends View<Negociations> {
  protected template(model: Negociations): string {
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
        ${model
          .allNegociations()
          .map((negociation: Negociation) => {
            return `
          <tr>
            <td>${this.formatDate(negociation.date)}</td>
            <td>${negociation.quantity}</td>
            <td>${negociation.value}</td>
          </tr>`;
          })
          .join('')}
      </tbody>
    </table>
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
