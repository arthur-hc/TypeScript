export function domInjector(selector) {
    return function (target, propertyKey) {
        let element = null;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Modify prototype ${target.constructor.name} and add getter to ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
