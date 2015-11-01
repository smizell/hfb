import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #addAttributes', () => {
  context('when attributes are not defined', () => {
    let hfObj = {};

    it('adds the attributes', () => {
      expect(hfObj.attributes).to.be.undefined;
      hfb.addAttributes(hfObj, {foo: 'bar'});
      expect(hfObj.attributes).to.deep.equal({foo: 'bar'});
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addAttributes(1, {foo: 'bar'});
        expect(hfObj.attributes).to.deep.equal({foo: 'bar'});
      });
    });

    context('when given an array', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addAttributes([1, 2], {foo: 'bar'});
        expect(hfObj.attributes).to.deep.equal({foo: 'bar'});
      });
    });
  });
});
