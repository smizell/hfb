import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #attributes', () => {
  context('when attributes are not defined', () => {
    let hfObj = {};

    it('adds the attributes', () => {
      expect(hfObj.attributes).to.be.undefined;
      hfb.attributes(hfObj);
      expect(hfObj).to.deep.equal({attributes: {}});
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.attributes(1);
        expect(hfObj).to.deep.equal({});
      });
    });

    context('when given an array', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.attributes([1, 2]);
        expect(hfObj).to.deep.equal({});
      });
    });
  });
});
