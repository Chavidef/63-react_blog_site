import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
//import { produce } from 'immer';



const AddPost = () => {

    //const [post, setPost] = useState({
    //    text: '',
    //    title: '',
    //})
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const history = useHistory();

    const onSubmitClick = async () => {
        await axios.post('/api/blogs/addpost', { title, text, datePosted: new Date(new Date().toLocaleString()).toISOString() });
        //await axios.post('/api/blogs/addpost', { title, text });
        history.push('/');
    }
    //const onTextChange = (e) => {
    //    const newPost = produce(post, draft => {
    //        draft[e.target.name] = e.target.value;
    //    });

    //    setPost(newPost);
    //}

    //const { title, text } = post;

    return (
        <>
            <div className="container">
                <main role="main" className="pb-3">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 jumbotron">
                            <input
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                            <br />
                            <textarea
                                name="text"
                                placeholder="What's on your mind?"
                                className="form-control"
                                value={text}
                                onChange={e => setText(e.target.value)}
                                rows="20">
                            </textarea>
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick} > Submit Post</button>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
export default AddPost;

