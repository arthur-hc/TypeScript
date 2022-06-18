import { Model } from '../interfaces/model.js';
import { Negociation } from './negociation.js';

export class Negociations implements Model<Negociations> {
  private readonly negociations: Negociation[] = [];

  public save(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  public allNegociations(): readonly Negociation[] {
    return this.negociations;
  }

  public toText(): string {
    return JSON.stringify(this.negociations);
  }
  public isEqual(object: Negociations): boolean {
    return (
      JSON.stringify(this.negociations) ===
      JSON.stringify(object.allNegociations())
    );
  }
}
