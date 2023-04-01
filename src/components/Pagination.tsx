import '../css/pagination.css';
import { fetchUsers, useAppDispatch } from '../store';

const Pagination = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}: {
	totalPosts: number;
	postsPerPage: number;
	setCurrentPage: (page: number) => void;
	currentPage: number;
}) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}

	const dispatch = useAppDispatch();

	const handleSetPages = (page: number) => {
		console.log(page);
		console.log('PAGE');

		dispatch(fetchUsers({ page, limit: 100 }));
		setCurrentPage(page);
	};

	return (
		<div className="pagination">
			{pages.map((page, index) => {
				return (
					<button
						key={index}
						onClick={() => handleSetPages(page)}
						className={page == currentPage ? 'active' : ''}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
