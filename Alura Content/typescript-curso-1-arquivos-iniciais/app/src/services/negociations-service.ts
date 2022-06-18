import { NegociationDay } from '../interfaces/negociation-day.js';
import { Negociation } from '../models/negociation.js';

export class NegociationsService {
  public async getNegociationsDay(): Promise<Negociation[]> {
    const response: Response = await fetch('http://localhost:8080/dados');
    const jsonNegociations: NegociationDay[] = await response.json();
    const arrayNegociations: Negociation[] = jsonNegociations.map(
      (negociation: NegociationDay) => {
        return new Negociation(
          new Date(),
          negociation.montante,
          negociation.vezes
        );
      }
    );
    return arrayNegociations;
  }
}
