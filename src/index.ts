import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/Users';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}

// const users = new Collection(
//   'http://localhost:3000/users',
//   (json: UserProps) => {
//     return User.buildUser(json);
//   }
// );

// users.on('change', () => {
//   const root = document.getElementById('root');
//   if (root) {
//     new UserList(root, users).render();
//   }
// });

// users.fetch();
