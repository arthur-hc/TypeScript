export class Negociation {
    constructor(_date, value, quantity) {
        this._date = _date;
        this.value = value;
        this.quantity = quantity;
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const data = new Date(this._date.getTime());
        return data;
    }
    toText() {
        return `
      Data: ${this.date}
      Quantidade: ${this.quantity}
      Valor: ${this.value}
      `;
    }
    isEqual(negociation) {
        return (this.date.getDate() === negociation.date.getDate() &&
            this.date.getMonth() === negociation.date.getMonth() &&
            this.date.getFullYear() === negociation.date.getFullYear());
    }
    static create(dateString, quantityString, valueString) {
        const date = new Date(dateString.replace('-', ','));
        const quantity = Number(quantityString);
        const value = Number(valueString);
        return new Negociation(date, quantity, value);
    }
}
//# sourceMappingURL=negociation.js.map