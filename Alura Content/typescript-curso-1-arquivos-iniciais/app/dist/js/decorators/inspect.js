export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const originalMethodReturn = originalMethod.apply(this, args);
        console.log(`--- Method ${propertyKey}`);
        console.log(`--- Parameter: ${JSON.stringify(args)}`);
        console.log(`--- Return: ${JSON.stringify(originalMethodReturn)}`);
        return originalMethodReturn;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map