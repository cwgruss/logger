import {LogLevel} from '../logger';
import {LogEntry} from './log_entry';

export class ConsoleLogEntry implements LogEntry {
  private _level: LogLevel;
  private _message: string;
  private _timestamp: number;

  get level(): LogLevel {
    return this._level;
  }

  get message(): string {
    return this._message;
  }

  get timestamp(): number {
    return this._timestamp;
  }

  constructor(entry: Partial<LogEntry>) {
    this._level = entry.level || 'log';
    this._message = entry.message || '';
    this._timestamp = entry.timestamp || +new Date();
  }
}
