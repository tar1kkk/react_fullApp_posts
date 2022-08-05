import axios from "axios";
import React, { useState, useMemo, useEffect } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import MySelect from "../components/UI/select/MySelect";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import '../styles/App.css'
import getPagesCount, { getPagesArray } from '../utils/pages'

function Posts() {

	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	let pagesArray = getPagesArray(totalPages);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount, limit));
	})

	useEffect(() => {
		fetchPosts();
	}, [page])

	function createPost(newPost) {
		setPosts([...posts, newPost]);
		setModal(false);
	}
	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const changePage = (page) => {
		setPage(page);
	}
	return (
		<div className="App">
			<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Create user
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0 ' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{postError &&
				<h2>ERROR</h2>}
			{isPostsLoading
				? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
			}
			<div className="page__wrapper">
				{pagesArray.map((p) => {
					return (
						<span onClick={() => changePage(p)}
							key={p}
							className={page === p
								? 'page page__current'
								: 'page'}>{p}
						</span>
					)
				})}
			</div>
		</div>
	);
}

export default Posts;
