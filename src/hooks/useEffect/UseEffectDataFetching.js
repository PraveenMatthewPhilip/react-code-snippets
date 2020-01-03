import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectDataFetching = () => {

    const [ posts, setPosts ] = useState([]);
    const [ post, setPost ] = useState({});
    const [ Id, setId ] = useState(1);
    const [IdFromButton, setIdFromButton] = useState(1);

    useEffect(() => {
        console.log("useEffect - All Posts - UseEffectDataFetching.js")
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        console.log("useEffect - Single Post - UseEffectDataFetching.js")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(res => {
            setPost(res.data);
        })
        .catch(err => console.log(err));
    }, [Id])

    return(
        <div>
            <input type="text" value={Id} placeholder="Enter Post ID" onChange={ e => setId(e.target.value)} />

            Single Post : {post.title}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default UseEffectDataFetching;