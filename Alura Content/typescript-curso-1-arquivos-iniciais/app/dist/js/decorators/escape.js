export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let originalMethodReturn = originalMethod.apply(this, args);
        if (typeof originalMethodReturn === 'string') {
            console.log(`@escape used by class ${target.constructor.name} for method ${propertyKey}`);
            originalMethodReturn = originalMethodReturn.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return originalMethodReturn;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map