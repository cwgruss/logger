import { LogLevel } from '../log_level';
export interface Clearable {
    clear(): void;
}
export interface Printer {
    print(level: LogLevel, message: string): void;
}
