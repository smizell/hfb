import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #addAttributes', () => {
  context('when attributes are not defined', () => {
    let hfObj = {};

    it('should add the attributes', () => {
      expect(hfObj.meta).to.be.undefined;
      hfb.addMetaAttributes(hfObj, {foo: 'bar'});
      expect(hfObj.meta.attributes).to.deep.equal({foo: 'bar'});
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the meta attributes added', () => {
        const hfObj = hfb.addMetaAttributes(1, {foo: 'bar'});
        expect(hfObj.meta.attributes).to.deep.equal({foo: 'bar'});
      });
    });

    context('when given an array', () => {
      it('returns a new object with the meta attributes added', () => {
        const hfObj = hfb.addMetaAttributes([1, 2], {foo: 'bar'});
        expect(hfObj.meta.attributes).to.deep.equal({foo: 'bar'});
      });
    });
  });
});
