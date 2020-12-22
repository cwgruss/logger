import {Logger} from '../../src/logger/logger';
import {expect} from 'chai';
import {assert, createSandbox, SinonSpy} from 'sinon';

describe('Logger', () => {
  let logSpy: SinonSpy;
  const sandbox = createSandbox();

  beforeEach(() => {
    logSpy = sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should be able to be instantiated', () => {
    const logger = new Logger('logger');
    const loggerName = logger.name;

    expect(logger).to.exist;
    expect(loggerName).to.be.eq('logger');
  });

  describe('log', () => {
    it('should delegate to console.log', () => {
      const logger = new Logger('logger');
      logger.log('Test log message');
      assert.calledOnce(logSpy);
    });
  });

  describe('warn', () => {
    it('should delegate to console.warn', () => {
      const logger = new Logger('logger');

      const warnSpy = sandbox.spy(console, 'warn');
      logger.warn('Test warn message');
      assert.calledOnce(warnSpy);
    });
  });

  describe('info', () => {
    it('should delegate to console.info', () => {
      const logger = new Logger('logger');

      const infoSpy = sandbox.spy(console, 'info');
      logger.info('Test info message');
      assert.calledOnce(infoSpy);
    });
  });

  describe('error', () => {
    it('should delegate to console.error', () => {
      const logger = new Logger('logger');

      const errorSpy = sandbox.spy(console, 'error');
      logger.error('Test error message');
      assert.calledOnce(errorSpy);
    });
  });

  describe('fatal', () => {
    it('should delegate to console.error', () => {
      const logger = new Logger('logger');

      const fatalSpy = sandbox.spy(console, 'error');
      logger.error('Test fatal message');
      assert.calledOnce(fatalSpy);
    });
  });
});
