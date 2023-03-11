"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandySvg = void 0;
const react_1 = __importStar(require("react"));
const injector_1 = require("./lib/injector");
const HandySvg = (props) => {
    const { src, loadTimeot, loadRetryCount } = props, restProps = __rest(props, ["src", "loadTimeot", "loadRetryCount"]);
    const isFirstRun = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (isFirstRun.current) {
            injector_1.injector.load(src, { timeout: loadTimeot, retryCount: loadRetryCount });
            isFirstRun.current = false;
            return;
        }
        injector_1.injector.load(src, { timeout: loadTimeot, retryCount: loadRetryCount, flushImmediate: true });
    }, [src]);
    return (react_1.default.createElement("svg", Object.assign({}, restProps),
        react_1.default.createElement("use", { href: `#${injector_1.injector.getId(src)}` })));
};
exports.HandySvg = HandySvg;
