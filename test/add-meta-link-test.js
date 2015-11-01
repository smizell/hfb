import {expect} from 'chai';
import hfb from '../src/index';

describe('Hf Builder #addAttributes', () => {
  let link = {
    rel: 'link',
    href: '/users/1',
  };

  context('when meta link are not defined', () => {
    let hfObj = {};

    it('adds the link', () => {
      expect(hfObj.meta).to.be.undefined;
      hfb.addMetaLink(hfObj, link);
      expect(hfObj.meta.links[0]).to.deep.equal(link);
    });
  });

  context('when not given an object', () => {
    context('when given a number', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addMetaLink(1, link);
        expect(hfObj.meta.links[0]).to.deep.equal(link);
      });
    });

    context('when given an array', () => {
      it('returns a new object with the attributes added', () => {
        const hfObj = hfb.addMetaLink([1, 2], link);
        expect(hfObj.meta.links[0]).to.deep.equal(link);
      });
    });
  });
});
