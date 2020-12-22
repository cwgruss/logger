"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolePrinter = void 0;
class ConsolePrinter {
    clear() {
        console.clear();
    }
    print(level, message) {
        let consoleFunc;
        switch (level) {
            case 'log': {
                consoleFunc = console.log.bind(console);
                break;
            }
            case 'info': {
                consoleFunc = console.info.bind(console);
                break;
            }
            case 'warn': {
                consoleFunc = console.warn.bind(console);
                break;
            }
            case 'error': {
                consoleFunc = console.error.bind(console);
                break;
            }
            case 'fatal': {
                consoleFunc = console.error.bind(console);
                break;
            }
            default: {
                consoleFunc = console.debug.bind(console);
            }
        }
        consoleFunc(message);
    }
}
exports.ConsolePrinter = ConsolePrinter;
//# sourceMappingURL=console_printer.js.map