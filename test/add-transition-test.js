import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #addAttributes', () => {
  let link = {
    rel: 'link',
    href: '/users/1',
  };

  context('when transitions are not defined', () => {
    let hfObj = {};

    it('adds the transition', () => {
      expect(hfObj.transitions).to.be.undefined;
      hfb.addTransition(hfObj, link);
      expect(hfObj.transitions[0]).to.deep.equal(link);
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addTransition(1, link);
        expect(hfObj.transitions[0]).to.deep.equal(link);
      });
    });

    context('when given an array', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addTransition([1, 2], link);
        expect(hfObj.transitions[0]).to.deep.equal(link);
      });
    });
  });
});
