import { LogLevel } from '../logger';
import { LogEntry } from './log_entry';
export declare class ConsoleLogEntry implements LogEntry {
    private _level;
    private _message;
    private _timestamp;
    get level(): LogLevel;
    get message(): string;
    get timestamp(): number;
    constructor(entry: Partial<LogEntry>);
}
