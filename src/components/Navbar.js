const Navbar = ({ groupBy, setGroupBy, sortOption, setSortOption }) => {
	return (
		<div className="navbar">
			<div>
				<label>Group By:</label>
				<select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>
					<option value="status">By Status</option>
					<option value="user">By User</option>
					<option value="priority">By Priority</option>
				</select>
			</div>
			<div>
				<label>Sort By:</label>
				<select
					onChange={(e) => setSortOption(e.target.value)}
					value={sortOption}
				>
					<option value="priority">Priority</option>
					<option value="title">Title</option>
				</select>
			</div>
		</div>
	);
};

export default Navbar;
