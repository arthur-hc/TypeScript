import { Negociation } from './negociation';

export class Negociations {
  private readonly negociations: Negociation[] = [];

  save(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  get allNegociations(): readonly Negociation[] {
    return this.negociations;
  }
}
