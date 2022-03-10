export function Bind() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const value = descriptor.value;

    return {
      configurable: true,

      get() {
        const bindedFn = value.bind(this);

        Reflect.defineProperty(this, name, { value: bindedFn, configurable: true, writable: true });

        const thisKey = this;

        return function () {
          return bindedFn.apply(thisKey, arguments);
        };
      },
    };
  };
}
