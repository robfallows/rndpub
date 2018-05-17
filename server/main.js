import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

Meteor.publish('randomNumbers', function() {
  let first = true;
  Meteor.setInterval(() => {
    const random = Random.secret();
    if (first) {
      first = false;
      this.added('randoms', 'abc123', { random });
    } else {
      this.changed('randoms', 'abc123', { random });
    }
    this.ready();
  }, 1000);
}); 
