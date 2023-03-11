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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injector = void 0;
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const fetcher_1 = require("./fetcher");
const utils_1 = require("./utils");
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const INJECTION_DELAY = 20;
class Injector {
    constructor() {
        this.fragment = null;
        this.cache = new Set();
        this.accumulateSvg = ({ url, svgString }) => {
            const id = this.getId(url);
            const symbol = this.svgToSymbol({ id, svgString });
            this.fragment = this.fragment || document.createDocumentFragment();
            this.fragment.append(symbol);
        };
        this.flushSvg = () => {
            const sprite = this.getSymbolMountPoint();
            if (this.fragment) {
                sprite.appendChild(this.fragment);
                this.fragment = null;
            }
        };
        this.deboucedflushSvg = (0, lodash_debounce_1.default)(this.flushSvg, INJECTION_DELAY);
    }
    parseSvgString(svg) {
        return new DOMParser().parseFromString(svg, 'image/svg+xml').children[0];
    }
    svgToSymbol({ id, svgString }) {
        const svgDocument = this.parseSvgString(svgString);
        const viewBox = svgDocument.getAttribute('viewBox');
        const symbol = document.createElementNS(SVG_NAMESPACE, 'symbol');
        if (viewBox) {
            symbol.setAttributeNS(null, 'viewBox', viewBox);
        }
        symbol.setAttributeNS(null, 'id', id);
        symbol.innerHTML = svgDocument.innerHTML;
        return symbol;
    }
    getSymbolMountPoint() {
        if (!this.symbolsMountingPoint) {
            const sprite = document.createElementNS(SVG_NAMESPACE, 'svg');
            this.symbolsMountingPoint = sprite;
            sprite.ariaHidden = 'true';
            sprite.style.width = '0';
            sprite.style.height = '0';
            sprite.style.overflow = 'hidden';
            document.body.appendChild(sprite);
        }
        return this.symbolsMountingPoint;
    }
    getId(url) {
        return (0, utils_1.extractFileName)(url);
    }
    load(url, { flushImmediate, timeout, retryCount } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cache.has(url)) {
                return;
            }
            this.cache.add(url);
            return (0, fetcher_1.fetchSvg)(url, { timeout, retryCount })
                .then((svgString) => {
                this.accumulateSvg({ url, svgString });
                flushImmediate ? this.flushSvg() : this.deboucedflushSvg();
            })
                .catch((error) => {
                this.cache.delete(url);
                throw error;
            });
        });
    }
}
exports.injector = new Injector();
