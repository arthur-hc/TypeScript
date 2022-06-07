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

  public static create(
    dateString: string,
    quantityString: string,
    valueString: string
  ): Negociation {
    const date = new Date(dateString.replace('-', ','));
    const quantity = Number(quantityString);
    const value = Number(valueString);
    return new Negociation(date, quantity, value);
  }
}
