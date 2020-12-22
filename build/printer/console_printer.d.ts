import { LogLevel } from '../logger';
import { Clearable, Printer } from './printer';
export declare class ConsolePrinter implements Clearable, Printer {
    clear(): void;
    print(level: LogLevel, message: string): void;
}
