"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(name) {
        this.name = name;
    }
    print(level, message) {
        switch (level) {
            case 'log': {
                console.log(message);
                return;
            }
            case 'info': {
                console.info(message);
                return;
            }
            case 'warn': {
                console.warn(message);
                return;
            }
            case 'error': {
                console.error(message);
                return;
            }
            case 'fatal': {
                console.error(message);
                return;
            }
        }
    }
    clear() {
        throw new Error('Method not implemented.');
    }
    debug(message) {
        this.print('debug', message);
    }
    error(message) {
        this.print('error', message);
    }
    info(message) {
        this.print('info', message);
    }
    log(message) {
        this.print('log', message);
    }
    warn(message) {
        this.print('warn', message);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map