import React from 'react';
import PostItem from './PostItem';
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

function PostList({ posts, title, remove }) {

	if (!posts.length) {
		return (
			<h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
		)
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{title}
			</h1>
			<TransitionGroup>
				{posts.map((post, index) =>
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post">
						<PostItem remove={remove} post={post} key={post.id} number={index + 1} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
}

export default PostList;