import { View } from './view.js';
export class NegociationsView extends View {
    template(model) {
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
            .map((negociation) => {
            return `
          <tr>
            <td>${new Intl.DateTimeFormat().format(negociation.date)}</td>
            <td>${negociation.quantity}</td>
            <td>${negociation.value}</td>
          </tr>`;
        })
            .join('')}
      </tbody>
    </table>
    `;
    }
}
