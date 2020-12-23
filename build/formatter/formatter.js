"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFormatter = void 0;
class BaseFormatter {
    constructor(defaultMetadata, _dateFormatBuilder) {
        this._dateFormatBuilder = _dateFormatBuilder;
        this._metadata = defaultMetadata;
    }
    createEntry(level, message, metadata) {
        const entry = Object.assign({}, metadata, this._metadata, {
            level,
            message,
            timestamp: +Date.now(),
        });
        return entry;
    }
    format(level, message, metadata, transform) {
        const entry = this.createEntry(level, message, metadata);
        const logTransform = transform || this._basicLogEntryTransform.bind(this);
        const formattedMsg = this.formatEntry(entry, logTransform);
        return formattedMsg;
    }
    formatEntry(logEntry, transform) {
        if (!transform || typeof transform !== 'function') {
            throw new Error(`Transform callback was ${typeof transform}, expected function`);
        }
        return transform(logEntry);
    }
    _basicLogEntryTransform(entry) {
        const { level, message, timestamp } = entry;
        const date = this._dateFormatBuilder.format(new Date(timestamp));
        return `[${date}] ${level === null || level === void 0 ? void 0 : level.toUpperCase()} : ${message}`;
    }
}
exports.BaseFormatter = BaseFormatter;
//# sourceMappingURL=formatter.js.map