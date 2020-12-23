import {LogLevel} from '../logger';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
}
