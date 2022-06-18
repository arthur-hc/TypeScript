export function logExecutionTime(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const divisor = inSeconds ? 1000 : 1;
      const unit = inSeconds ? 's' : 'ms';
      const t1 = performance.now();
      const originalMethodReturn = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`Method ${propertyKey} took ${(t2 - t1) / divisor} ${unit}`);
      originalMethodReturn;
    };
    return descriptor;
  };
}
