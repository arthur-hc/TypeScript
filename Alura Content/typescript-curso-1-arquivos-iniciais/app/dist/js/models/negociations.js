export class Negociations {
    constructor() {
        this.negociations = [];
    }
    save(negociation) {
        this.negociations.push(negociation);
    }
    allNegociations() {
        return this.negociations;
    }
}
