import React from 'react';
import MyButton from './UI/button/MyButton';

function PostItem({ post, number, remove }) {
	return (
		<div className="post">
			<div className="post__content">
				<strong>{post.id}. {post.title} </strong>
				<div>
					{post.body}
				</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => remove(post)} >Delete</MyButton>
			</div>
		</div>
	);
}

export default PostItem;