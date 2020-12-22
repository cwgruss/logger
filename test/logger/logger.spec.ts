import {Logger} from '../../src/logger/logger';
import {expect} from 'chai';

describe('Logger', () => {
  it('Should be able to be instantiated', () => {
    const logger = new Logger('logger');
    const loggerName = logger.name;

    expect(logger).to.exist;
    expect(loggerName).to.be.eq('logger');
  });
});
