import { LogLevel } from '../logger';
import { Printer } from './printer';
export declare class ConsolePrinter implements Printer {
    print(level: LogLevel, message: string): void;
}
