"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogEntry = void 0;
class ConsoleLogEntry {
    constructor(entry) {
        this._level = entry.level || 'log';
        this._message = entry.message || '';
        this._timestamp = entry.timestamp || +new Date();
    }
    get level() {
        return this._level;
    }
    get message() {
        return this._message;
    }
    get timestamp() {
        return this._timestamp;
    }
}
exports.ConsoleLogEntry = ConsoleLogEntry;
//# sourceMappingURL=console_log_entry.js.map