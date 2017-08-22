
var log = sinon.spy(),
    requestStub = sinon.stub().callsArgWith(1, null, null, 'google.com'),
    google = proxyquire('../google', { 'request': requestStub });
describe('google module', function () {
    beforeEach(function () {
        google();
    });
    it('should request google.com', function () {
        expect(reqstub).to.be.called();
    });
    it('should log google body', function () {
        expect(callback).to.be.calledWith(null, null,
            'google.com');
    });
}); 