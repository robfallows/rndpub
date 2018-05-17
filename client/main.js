import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// 'randoms` is the "collection" name we used in the publication
const RandomNumbers = new Mongo.Collection('randoms');

Template.hello.onCreated(function helloOnCreated() {
  this.subscribe('randomNumbers');
});

Template.hello.helpers({
  numbers() {
    return RandomNumbers.find('abc123');
  }
});
