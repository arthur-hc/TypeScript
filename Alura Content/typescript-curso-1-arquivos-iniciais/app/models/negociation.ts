export class Negociation {
  constructor(
    private readonly _date: Date,
    public readonly value: number,
    public readonly quantity: number
  ) {}

  get volume(): number {
    return this.quantity * this.value;
  }

  get date(): Date {
    // Tornando o data privado e retornando uma cópia apenas, evitando a alteração da propriedade
    const data = new Date(this._date.getTime());
    return data;
  }
}
