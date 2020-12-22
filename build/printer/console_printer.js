"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolePrinter = void 0;
class ConsolePrinter {
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
}
exports.ConsolePrinter = ConsolePrinter;
//# sourceMappingURL=console_printer.js.map