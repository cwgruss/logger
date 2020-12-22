import { LogLevel } from './log_level';
export interface Printer {
    print(level: LogLevel, message: string): void;
}
export interface LoggerAPI {
    /**
     * Clears the console of text
     */
    clear(): void;
    /**
     * Outputs a message to the console with the log level `debug`.
     */
    debug(message: string): void;
    /**
     * Outputs an error message to the console with the log level `error`.
     */
    error(message: string): void;
    /**
     * Outputs an informative message with the log level `info`.
     */
    info(message: string): void;
    /**
     * Outputs a general message with the log level of `log`.
     */
    log(message: string): void;
    /**
     * Outputs a warning message with the log level `warn`.
     */
    warn(message: string): void;
}
export declare class Logger implements Printer, LoggerAPI {
    readonly name: string;
    constructor(name: string);
    print(level: LogLevel, message: string): void;
    clear(): void;
    debug(message: string): void;
    error(message: string): void;
    info(message: string): void;
    log(message: string): void;
    warn(message: string): void;
}
