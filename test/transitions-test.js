import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #transitions', () => {
  context('when transitions are not defined', () => {
    let hfObj = {};

    it('adds the transitions array', () => {
      expect(hfObj.transitions).to.be.undefined;
      hfb.transitions(hfObj);
      expect(hfObj).to.deep.equal({transitions: []});
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.transitions(1);
        expect(hfObj).to.deep.equal([]);
      });
    });

    context('when given an array', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.transitions([1, 2]);
        expect(hfObj).to.deep.equal([]);
      });
    });
  });
});
