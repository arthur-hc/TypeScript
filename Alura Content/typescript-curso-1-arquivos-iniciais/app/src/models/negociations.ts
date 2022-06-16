import { Negociation } from './negociation';

export class Negociations {
  private readonly negociations: Negociation[] = [];

  public save(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  public allNegociations(): readonly Negociation[] {
    return this.negociations;
  }
}
