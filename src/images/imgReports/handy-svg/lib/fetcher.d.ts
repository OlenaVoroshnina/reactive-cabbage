interface RequestParams extends RequestInit {
    timeout?: number;
    retryCount?: number;
}
export declare function fetchSvg(url: string, params?: RequestParams): Promise<string>;
export {};
