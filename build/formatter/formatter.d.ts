import { LogEntry } from '../entry/log_entry';
import { LogLevel } from '../log_level';
import { DateAsStringFormatter } from './format_date';
declare type Metadata = {
    [key: string]: number | string | Date | boolean;
};
export interface Formatter {
    createEntry(level: LogLevel, message: string, metadata: Metadata): LogEntry;
    format(level: LogLevel, message: string, metadata: Metadata, transfrom?: LogEntryTransform): string;
    formatEntry(logEntry: LogEntry, transform: LogEntryTransform): string;
}
export declare type LogEntryTransform = (entry: LogEntry) => string;
export declare abstract class BaseFormatter implements Formatter {
    private _dateFormatBuilder;
    private _metadata;
    constructor(defaultMetadata: Metadata, _dateFormatBuilder: DateAsStringFormatter);
    createEntry(level: LogLevel, message: string, metadata: Metadata): LogEntry;
    format(level: LogLevel, message: string, metadata: Metadata, transform?: LogEntryTransform): string;
    formatEntry(logEntry: LogEntry, transform: LogEntryTransform): string;
    private _basicLogEntryTransform;
}
export {};
