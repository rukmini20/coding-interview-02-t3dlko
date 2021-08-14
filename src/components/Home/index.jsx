import React, { useEffect, useState } from 'react';
import { getusersAPI } from '../../networks/users.api';

const Home = () => {
  let [page, setPage] = useState(0);
  let [users, setUsers] = useState([]);

  const fetchData = async () => {
    page = ++page;
    setPage(page);
    try {
      const { status, body } = await getusersAPI(page);
      console.log(body.data);

      console.log('body: ', body.data);
      users = [...prev, ...body.data];
      setUsers(users);
      console.log('users: ', users);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {users?.map(userItem => (
          <div key={userItem.id}>
            Name: {userItem.first_name} email: {userItem.email}
          </div>
        ))}
      </div>
      {page}
      <button type="button" onClick={fetchData}>
        next
      </button>
    </div>
  );
};

export default Home;
