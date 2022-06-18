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
    toText() {
        return JSON.stringify(this.negociations);
    }
    isEqual(object) {
        return (JSON.stringify(this.negociations) ===
            JSON.stringify(object.allNegociations()));
    }
}
//# sourceMappingURL=negociations.js.map