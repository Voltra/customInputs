export function make(Class, ...args: Array<any>): any {
    return new Class(...args);
}