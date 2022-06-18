export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let originalMethodReturn = originalMethod.apply(this, args);
    if (typeof originalMethodReturn === 'string') {
      console.log(
        // Poderia ser this.constructor.name
        `@escape used by class ${target.constructor.name} for method ${propertyKey}`
      );
      originalMethodReturn = originalMethodReturn.replace(
        /<script>[\s\S]*?<\/script>/,
        ''
      );
    }
    return originalMethodReturn;
  };
  return descriptor;
}
