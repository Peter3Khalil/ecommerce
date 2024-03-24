import React from 'react';
import ClientComponent from './ClientComponent';

const Home = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await response.json();
  return <ClientComponent data={users} />;
};
export default Home;
