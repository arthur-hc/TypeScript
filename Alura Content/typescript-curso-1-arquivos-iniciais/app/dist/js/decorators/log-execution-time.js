export function logExecutionTime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
