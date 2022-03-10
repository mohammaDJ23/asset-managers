export class Try {
  static sync(fn: (...args: any[]) => any) {
    const ref = this;

    return function (...args: any[]) {
      try {
        const data = fn.apply(ref, args);

        return {
          data,
          error: '',
        };
      } catch (error) {
        return {
          data: null,
          error: (error as any).message,
        };
      }
    };
  }

  static async(fn: (...args: any[]) => Promise<any>) {
    const ref = this;

    return async function (...args: any[]) {
      try {
        const data = await fn.apply(ref, args);

        return {
          data,
          error: '',
        };
      } catch (error) {
        return {
          data: null,
          error: (error as any).message,
        };
      }
    };
  }
}
