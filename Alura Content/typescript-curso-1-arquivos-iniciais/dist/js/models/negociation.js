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
        // Tornando o data privado e retornando uma cópia apenas, evitando a alteração da propriedade
        const data = new Date(this._date.getTime());
        return data;
    }
}
