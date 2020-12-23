import {LogEntry} from '../entry/log_entry';
import {LogLevel} from '../log_level';
import {DateAsStringFormatter} from './format_date';

type Metadata = {[key: string]: number | string | Date | boolean};

export interface Formatter {
  createEntry(level: LogLevel, message: string, metadata: Metadata): LogEntry;

  format(
    level: LogLevel,
    message: string,
    metadata: Metadata,
    transfrom?: LogEntryTransform
  ): string;

  formatEntry(logEntry: LogEntry, transform: LogEntryTransform): string;
}

export type LogEntryTransform = (entry: LogEntry) => string;

export abstract class BaseFormatter implements Formatter {
  private _metadata: Metadata;

  constructor(
    defaultMetadata: Metadata,
    private _dateFormatBuilder: DateAsStringFormatter
  ) {
    this._metadata = defaultMetadata;
  }

  createEntry(level: LogLevel, message: string, metadata: Metadata): LogEntry {
    const entry: LogEntry = Object.assign({}, metadata, this._metadata, {
      level,
      message,
      timestamp: +Date.now(),
    });

    return entry;
  }

  format(
    level: LogLevel,
    message: string,
    metadata: Metadata,
    transform?: LogEntryTransform
  ): string {
    const entry = this.createEntry(level, message, metadata);
    const logTransform = transform || this._basicLogEntryTransform.bind(this);
    const formattedMsg = this.formatEntry(entry, logTransform);
    return formattedMsg;
  }

  formatEntry(logEntry: LogEntry, transform: LogEntryTransform): string {
    if (!transform || typeof transform !== 'function') {
      throw new Error(
        `Transform callback was ${typeof transform}, expected function`
      );
    }

    return transform(logEntry);
  }

  private _basicLogEntryTransform(entry: LogEntry): string {
    const {level, message, timestamp} = entry;
    const date = this._dateFormatBuilder.format(new Date(timestamp));
    return `[${date}] ${level?.toUpperCase()} : ${message}`;
  }
}
