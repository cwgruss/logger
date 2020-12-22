import {LogLevel} from '../logger';
import {Printer} from './printer';

type ConsolePrintFunction = (message: any, optionalParams?: any[]) => void;

export class ConsolePrinter implements Printer {
  print(level: LogLevel, message: string): void {
    let consoleFunc: ConsolePrintFunction;
    switch (level) {
      case 'log': {
        consoleFunc = console.log.bind(console);
        break;
      }
      case 'info': {
        consoleFunc = console.info.bind(console);
        break;
      }
      case 'warn': {
        consoleFunc = console.warn.bind(console);
        break;
      }
      case 'error': {
        consoleFunc = console.error.bind(console);
        break;
      }
      case 'fatal': {
        consoleFunc = console.error.bind(console);
        break;
      }
      default: {
        consoleFunc = console.debug.bind(console);
      }
    }

    consoleFunc(message);
  }
}
