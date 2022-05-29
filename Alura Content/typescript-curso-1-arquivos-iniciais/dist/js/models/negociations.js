export class Negociations {
    constructor() {
        this.negociations = [];
    }
    save(negociation) {
        this.negociations.push(negociation);
    }
    get allNegociations() {
        return this.negociations;
    }
}
