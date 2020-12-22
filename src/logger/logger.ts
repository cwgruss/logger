import {LogLevel} from './log_level';

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

export class Logger implements Printer, LoggerAPI {
  constructor(public readonly name: string) {}

  print(level: LogLevel, message: string): void {
    switch (level) {
      case 'log': {
        console.log(message);
        return;
      }
      case 'info': {
        console.info(message);
        return;
      }
      case 'warn': {
        console.warn(message);
        return;
      }
      case 'error': {
        console.error(message);
        return;
      }
      case 'fatal': {
        console.error(message);
        return;
      }
    }
  }

  clear(): void {
    throw new Error('Method not implemented.');
  }

  debug(message: string): void {
    this.print('debug', message);
  }

  error(message: string): void {
    this.print('error', message);
  }

  info(message: string): void {
    this.print('info', message);
  }

  log(message: string): void {
    this.print('log', message);
  }

  warn(message: string): void {
    this.print('warn', message);
  }
}
