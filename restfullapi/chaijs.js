var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;
var animals = { pets: ['dog', 'cat', 'mouse'] };
var foo = 'bar';
expect(foo).to.be.a('string').and.equal('bar');
expect(animals).to.have.property('pets').with.length(4);
animals.should.have.property('pets').with.length(4);
assert.equal(foo, 'bar', 'Foo equal bar');
var sum = function (a, b) {
    return a + b;
}
var doWork = function () {
    var x = 1,
        y = 2;
    console.log(sum(x, y));
}
var sinon = require("sinon"); var sinonChai = require("sinon-chai"); chai.use(sinonChai);
describe('doWork', function () {
    var sum;
    it('should call sum', function () {
        sum = sinon.spy();
        doWork();
        expect(sum).to.be.calledWith(1, 2);
    });
});
describe('doWork', function () {
    var sum;
    console.log = sinon.spy();
    it('should call sum', function () {
        sum = sinon.spy().andCallThrough();
        doWork();
        expect(sum).to.be.calledWith(1, 2);
        expect(console.log).to.be.calledWith(3);
    });
});