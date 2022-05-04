import { User } from '../models/Users';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('changed');
});

user.on('change', () => {
  console.log('changed again');
});

user.on('fuck', () => {
  console.log('fucked');
});

user.trigger('change');
user.trigger('fuck');

console.log(user);
