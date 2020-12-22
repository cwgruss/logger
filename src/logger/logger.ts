import {LogLevel} from '../log_level';
import {Printer} from '../printer/printer';

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

export class Logger implements LoggerAPI {
  constructor(private _printer: Printer, public readonly name: string) {}

  clear(): void {
    throw new Error('Method not implemented.');
  }

  debug(message: string): void {
    this._printer.print('debug', message);
  }

  error(message: string): void {
    this._printer.print('error', message);
  }

  info(message: string): void {
    this._printer.print('info', message);
  }

  log(message: string): void {
    this._printer.print('log', message);
  }

  warn(message: string): void {
    this._printer.print('warn', message);
  }
}
