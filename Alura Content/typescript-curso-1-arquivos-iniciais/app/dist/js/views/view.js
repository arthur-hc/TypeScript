export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`The element ${selector} not found.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
