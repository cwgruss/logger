import {Logger} from '../../src/logger/logger';
import {ConsolePrinter} from '../../src/printer/console_printer';
import {expect} from 'chai';
import {assert, createSandbox, SinonSpy} from 'sinon';

describe('Logger', () => {
  let logSpy: SinonSpy;
  let target: Logger;
  const sandbox = createSandbox();

  beforeEach(() => {
    logSpy = sandbox.spy(console, 'log');

    const printer = new ConsolePrinter();
    target = new Logger(printer, 'logger');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should be able to be instantiated', () => {
    const loggerName = target.name;

    expect(target).to.exist;
    expect(loggerName).to.be.eq('logger');
  });

  describe('log', () => {
    it('should delegate to console.log', () => {
      target.log('Test log message');
      assert.calledOnce(logSpy);
    });
  });

  describe('warn', () => {
    it('should delegate to console.warn', () => {
      const warnSpy = sandbox.spy(console, 'warn');
      target.warn('Test warn message');
      assert.calledOnce(warnSpy);
    });
  });

  describe('info', () => {
    it('should delegate to console.info', () => {
      const infoSpy = sandbox.spy(console, 'info');
      target.info('Test info message');
      assert.calledOnce(infoSpy);
    });
  });

  describe('error', () => {
    it('should delegate to console.error', () => {
      const errorSpy = sandbox.spy(console, 'error');
      target.error('Test error message');
      assert.calledOnce(errorSpy);
    });
  });

  describe('fatal', () => {
    it('should delegate to console.error', () => {
      const fatalSpy = sandbox.spy(console, 'error');
      target.error('Test fatal message');
      assert.calledOnce(fatalSpy);
    });
  });
});
