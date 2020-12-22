import { LogLevel } from '../log_level';
export interface Printer {
    print(level: LogLevel, message: string): void;
}
