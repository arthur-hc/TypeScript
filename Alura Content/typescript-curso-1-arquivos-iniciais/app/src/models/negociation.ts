import { Model } from '../interfaces/model.js';

export class Negociation implements Model<Negociation> {
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

  public toText(): string {
    return `
      Data: ${this.date}
      Quantidade: ${this.quantity}
      Valor: ${this.value}
      `;
  }

  public isEqual(negociation: Negociation): boolean {
    return (
      this.date.getDate() === negociation.date.getDate() &&
      this.date.getMonth() === negociation.date.getMonth() &&
      this.date.getFullYear() === negociation.date.getFullYear()
    );
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
