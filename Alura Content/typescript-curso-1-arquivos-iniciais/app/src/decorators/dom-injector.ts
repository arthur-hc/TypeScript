export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement | null = null;
    const getter = function () {
      if (!element) {
        element = <HTMLElement>document.querySelector(selector);
        console.log(
          `Modify prototype ${target.constructor.name} and add getter to ${propertyKey}`
        );
      }
      return element;
    };

    // POR SER UMA PROPRIEDADE NÃO ESTÁTICA, PARA ACESSAR É NECESSÁRIO USAR O MÉTODO GETTER, UTILIZANDO defineProperty, QUE IRÁ SOBRESCREVER O PROTOTYPE DA CLASSE
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
