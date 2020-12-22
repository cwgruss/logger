"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(_printer, name) {
        this._printer = _printer;
        this.name = name;
    }
    clear() {
        throw new Error('Method not implemented.');
    }
    debug(message) {
        this._printer.print('debug', message);
    }
    error(message) {
        this._printer.print('error', message);
    }
    info(message) {
        this._printer.print('info', message);
    }
    log(message) {
        this._printer.print('log', message);
    }
    warn(message) {
        this._printer.print('warn', message);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map