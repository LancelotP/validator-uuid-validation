var validator = require('validator');
var sinon = require('sinon');
var expect = require('expect.js');

// Spies
var spy = validator;
spy.isUUID = sinon.spy(validator, 'isUUID');

// User's sources
var uuidValidator = require('../sources/uuid-validator');

// Test Cases
describe('Confirm if a string contains a substring', function() {
    it('You must invoke validator.isUUID() ', function() {
        uuidValidator(spy, "_");
        expect(spy.isUUID.called).to.be.ok();
    });

    it('You must invoke validator.isUUID() with the proper arguments', function() {
        uuidValidator(spy, "_");
        expect(spy.isUUID.calledWithExactly("_")).to.be.ok();
    });

    it('validateUUID must return true if given value is an UUID', function() {
        var result = uuidValidator(validator, "A987FBC9-4BED-3078-CF07-9141BA07C9F3");
        expect(result).to.be.ok();
    });

    it('validateUUID must return false if given value is not an UUID', function() {
        var result = uuidValidator(validator, "934868RFS9");
        expect(result).not.to.be.ok();
    });
});
