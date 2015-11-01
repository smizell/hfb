import _ from './utils';

export default {
  attributes: (givenObj = {}) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.attributes) obj.attributes = {};
    return obj.attributes;
  },

  transitions: (givenObj = {}) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.transitions) obj.transitions = [];
    return obj.transitions;
  },

  addMetaAttributes: (givenObj = {}, newMetaAttributes = {}) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.meta) obj.meta = {};
    if (!obj.meta.attributes) obj.meta.attributes = {};
    _.extend(obj.meta.attributes, newMetaAttributes);
    return obj;
  },

  addMetaLink: (givenObj = {}, newLink) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.meta) obj.meta = {};
    if (!obj.meta.links) obj.meta.links = [];
    obj.meta.links.push(newLink);
    return obj;
  },

  addAttributes: (givenObj = {}, newAttributes = {}) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.attributes) obj.attributes = {};
    _.extend(obj.attributes, newAttributes);
    return obj;
  },

  addTransition: (givenObj = {}, newTransition = {}) => {
    let obj = (!_.isObject(givenObj) || _.isArray(givenObj)) ? {} : givenObj;
    if (!obj.transitions) obj.transitions = [];
    if (!_.isEmpty(newTransition)) obj.transitions.push(newTransition);
    return obj;
  },
};
