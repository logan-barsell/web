import { User } from './models/Users';

const user = User.buildUser({ id: 1, name: 'abby jr', age: 27 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
