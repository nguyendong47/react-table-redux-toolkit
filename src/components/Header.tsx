import { useCallback, useState } from 'react';
import '../css/header.css';
import { fetchUsers, useAppDispatch } from '../store';

function Header() {
	const [limit, setLimit] = useState(100);
	const dispatch = useAppDispatch();

	const changePage = useCallback(
		(value: string) => {
			let numberPerPage: number = Number.parseInt(value);
			dispatch(fetchUsers({ page: 1, limit: numberPerPage }));
			setLimit(numberPerPage);
		},
		[limit]
	);

	return (
		<section className="header">
			<div className="items-controller">
				<h5>Show</h5>
				<select
					onChange={(e) => changePage(e.target.value)}
					name="limit"
					id="itemPerPage"
					defaultValue={100}
				>
					<option value="100">100</option>
					<option value="1000">1000</option>
					<option value="5000">5000</option>
					<option value="10000">10000</option>
					<option value="100000">100000</option>
				</select>
				<h5>Per Page</h5>
			</div>
			<div className="search">
				<h5>Search</h5>
				<input type="text" name="" id="search" placeholder="search" />
			</div>
		</section>
	);
}

export default Header;
