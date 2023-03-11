"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSvg = void 0;
const utils_1 = require("./utils");
const DEFAULT_TIMEOUT = 4800;
const DEFAULT_RETRY_COUNT = 2;
function fetchWithTimeout(url, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeout = (params === null || params === void 0 ? void 0 : params.timeout) || DEFAULT_TIMEOUT;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        return fetch(url, Object.assign(Object.assign({}, params), { signal: controller.signal }))
            .then((response) => {
            clearTimeout(timeoutId);
            return response;
        })
            .catch((error) => {
            clearTimeout(timeoutId);
            throw error;
        });
    });
}
function fetchSvg(url, params) {
    let retryCount = (params === null || params === void 0 ? void 0 : params.retryCount) === undefined ? DEFAULT_RETRY_COUNT : params === null || params === void 0 ? void 0 : params.retryCount;
    function doFetch(url, params) {
        return fetchWithTimeout(url, params)
            .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error(`Unable to load SVG file: ${url}`);
        })
            .catch((error) => {
            if (retryCount > 0) {
                retryCount--;
                return doFetch(url, params);
            }
            throw error;
        });
    }
    return doFetch(url, params)
        .then((response) => {
        (0, utils_1.checkSvgContent)(response);
        return response;
    });
}
exports.fetchSvg = fetchSvg;
