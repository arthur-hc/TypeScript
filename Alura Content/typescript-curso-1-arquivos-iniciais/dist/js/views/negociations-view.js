export class NegociationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
