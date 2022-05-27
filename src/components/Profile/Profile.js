import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  axios  from 'axios'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Profile.css';
function Profile() {
    const {UserId}= useParams()

    const [ListUser,setListUser] = useState([]);
    const [posts,setPosts] = useState([]);

    const fetchUser = async () =>{
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${UserId}`);
            setListUser(resp.data);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchPosts = async () =>{
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`);
            setPosts(resp.data);
        } catch (err) {
            console.error(err);
        }
    }
    
    useEffect(() => {
    fetchUser();
    fetchPosts();
    }, [])

    return (
        <div>
            <Button as={Link} to='/' variant="primary">Go back</Button>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/600/24f355" />
                <Card.Body>
                <Card.Title>{ListUser.name}</Card.Title>
                    <Card.Text>
                        {ListUser.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            {posts?.map((post,i) =>
                <Card key={`Post_${i}`}>
                    <Card.Img variant="top" className="image-post" src="https://via.placeholder.com/600/24f355" />
                    <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
            
        </div>
    )
}

export default Profile
