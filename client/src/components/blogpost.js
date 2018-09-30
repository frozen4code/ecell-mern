import React from 'react';

const Post = () => (
    <div className="post-block shadow p-3 mb-5 bg-white rounded">
        <div className="post__title">
            <h2 className="title">{this.props.post_title}</h2>
        </div>
        <div className="post__author"></div>
        <div className="post__description"></div>
        <div className="post__show-entire"></div>
    </div>
)

export default Post;