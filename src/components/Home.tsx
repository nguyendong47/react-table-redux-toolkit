import { useState } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import { User } from '../interfaces/Users';
import { deleteUser, useAppDispatch, useAppSelector } from '../store';

function Home() {
	const userList: User[] = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();
	const handleDelete = (id: string) => {
		dispatch(deleteUser(id));
	};
	const [coinsData, setCoinsData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(1000);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

	return (
		<div>
			<Header />
			<Table userList={userList} />
			<Pagination
				totalPosts={25000}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
}

export default Home;
