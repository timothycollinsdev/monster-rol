import { response } from 'express';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
  })
  .then(response => response.json())
  .then(posts => console.log(posts))