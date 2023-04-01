import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { fetchUsers, useAppDispatch } from './store';
import { querySearchType } from './types/querySearchType';

function App() {
	const dispatch = useAppDispatch();
	const initialSearch: querySearchType = {
		page: 1,
		limit: 100,
	};

	const memoizedFunction = useCallback(() => {
		dispatch(fetchUsers(initialSearch));
	}, [initialSearch]);

	useEffect(() => {
		console.log('App');
		memoizedFunction();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					{' '}
				</Route>
				{/* <Route path="/create" element={<Create />}>
					{' '}
				</Route>
				<Route path="/edit/:id" element={<Update />}>
					{' '}
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
}
export default App;
