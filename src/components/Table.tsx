import { Fragment, useState } from 'react';
import { headerColumn } from '../data/headerColumn';
import { User } from '../interfaces/Users';

function Table({ userList }: { userList: User[] }) {
	const [selectedRow, setSelectedRow] = useState(-1);

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLDivElement>,
		index: number
	): void => {
		if (event.key === 'ArrowUp') {
			// Move selection up
			// event.preventDefault(); // Prevent scrolling
			setSelectedRow((prev: number | null) =>
				prev !== null ? Math.max(0, prev - 1) : index
			);
		} else if (event.key === 'ArrowDown') {
			// Move selection down
			// event.preventDefault(); // Prevent scrolling
			setSelectedRow((prev: number | null) =>
				prev !== null ? Math.min(userList.length - 1, prev + 1) : index
			);
		}
	};

	return (
		<table className="table table-hover table-bordered table-responsive">
			<thead>
				<tr>
					<th className="fixedCheckbox" style={{ border: 'none' }}>
						<input type="checkbox" name="" id="selectAll" />
					</th>
					<th className="fixedAction">Action</th>
					{headerColumn.map((column, index) => (
						<th
							className={index < 2 ? 'fixedColumn' : ''}
							style={{
								minWidth: '150px',
								left:
									index < 2
										? `${150 * index + 30 + 100}px`
										: undefined,
							}}
							key={index}
						>
							{column}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{userList.map((user, index) => (
					<Fragment key={index}>
						<tr
							onClick={() => setSelectedRow(index)}
							onKeyDown={(event) => handleKeyDown(event, index)}
							className={
								selectedRow === index ? 'selected-row' : ''
							}
							tabIndex={0} // Make the row focusable
						>
							<td className="fixedCheckbox">
								<input type="checkbox" />
							</td>
							<td className="fixedAction">
								<i className="fa fa-edit"></i>|
								<i className="fa fa-trash"></i>
							</td>
							{Object.values(user).map((data, index) => (
								<td
									key={index}
									className={
										index < 2
											? 'fixedColumn text-truncate'
											: 'text-truncate'
									}
									// className="text-truncate"
									style={{
										maxWidth: '500px',
										left:
											index < 2
												? `${150 * index + 30 + 100}px`
												: undefined,
									}}
								>
									{data}
								</td>
							))}
						</tr>
					</Fragment>
				))}
			</tbody>
		</table>
	);
}

export default Table;
