import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function Users() {
    const [ListUsers,setListUsers] = useState([]);

    const fetchUsers = async () =>{
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListUsers(resp.data);
        } catch (err) {
            console.error(err);
        }
    }
        
    useEffect(() => {
    fetchUsers()
    }, []) 

    return (
        <div className="users">
          {ListUsers?.map((user,i) => <UserCard user={user} key={`UserCard_${user.id}`} />)}
        </div>
    )
}

export default Users
