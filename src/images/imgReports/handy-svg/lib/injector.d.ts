declare type LoadOptions = {
    flushImmediate?: boolean;
    timeout?: number;
    retryCount?: number;
};
declare class Injector {
    private fragment;
    private symbolsMountingPoint;
    private cache;
    private parseSvgString;
    private svgToSymbol;
    private accumulateSvg;
    private flushSvg;
    private deboucedflushSvg;
    private getSymbolMountPoint;
    getId(url: string): string;
    load(url: string, { flushImmediate, timeout, retryCount }?: LoadOptions): Promise<void>;
}
export declare const injector: Injector;
export {};
