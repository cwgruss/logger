"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../src/logger/logger");
const chai_1 = require("chai");
describe('Logger', () => {
    it('Should be able to be instantiated', () => {
        const logger = new logger_1.Logger('logger');
        chai_1.expect(logger).to.not.be.undefined;
    });
});
//# sourceMappingURL=logger.spec.js.map