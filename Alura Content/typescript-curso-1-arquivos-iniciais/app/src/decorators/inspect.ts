// export function inspect() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       const originalMethodReturn = originalMethod.apply(this, args);
//       console.log(`--- Method ${propertyKey}`);
//       console.log(`--- Parameter: ${JSON.stringify(args)}`);
//       console.log(`--- Return: ${JSON.stringify(originalMethodReturn)}`);
//       return originalMethodReturn;
//     };
//     return descriptor;
//   };
// }

// CASO O DECORATOR NÃO RECEBA PARAMETROS, ELE PODE SER DIRETAMENTE USADO SOBRE A FUNÇÃO

export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const originalMethodReturn = originalMethod.apply(this, args);
    console.log(`--- Method ${propertyKey}`);
    console.log(`--- Parameter: ${JSON.stringify(args)}`);
    console.log(`--- Return: ${JSON.stringify(originalMethodReturn)}`);
    return originalMethodReturn;
  };
  return descriptor;
}

// SUA CHAMADA NÃO PRECISARÁ SER EXECUTADA, SENDO CHAMADA APENAS COM @inspect
