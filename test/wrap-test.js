import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #attributes', () => {
  context('when given an object', () => {
    let objToWrap = {
      foo: 'bar',
    };

    it('wraps the object', () => {
      const hfObj = hfb.wrap(objToWrap);
      expect(hfObj).to.deep.equal({attributes: {foo: 'bar'}});
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object', () => {
        const hfObj = hfb.wrap(1);
        expect(hfObj).to.deep.equal({});
      });
    });

    context('when given an array', () => {
      it('returns a new object', () => {
        const hfObj = hfb.wrap([1, 2]);
        expect(hfObj).to.deep.equal({});
      });
    });
  });
});
