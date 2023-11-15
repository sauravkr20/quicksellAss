import React, { useState, useEffect } from "react";
import Group from "./Group";
import Navbar from "./Navbar";

const KanbanBoard = () => {
	const [tickets, setTickets] = useState([]);
	const [groupedTickets, setGroupedTickets] = useState([]);
	const [groupBy, setGroupBy] = useState("priority");
	const [sortOption, setSortOption] = useState("title");
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// Fetch data from the provided API when the component mounts
		fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
			.then((response) => response.json())
			.then((data) => {
				setTickets(data.tickets);
				setUsers(data.users);
				groupTickets();
				sortTickets();
			});
	}, []);

	// Function to group tickets based on the selected grouping option
	const groupTickets = () => {
		// Implement grouping logic based on the current value of groupBy
		let groupedData = [];

		switch (groupBy) {
			case "status":
				groupedData = groupByStatus();
				break;
			case "user":
				groupedData = groupByUser();
				break;
			case "priority":
				groupedData = groupByPriority();
				break;
			default:
				break;
		}

		const dynamicGroupTitle = (group) => {
			switch (groupBy) {
				case "user":
					// Find the user name based on the userId
					const user = users.find((u) => u.id === group);
					return user ? user.name : group;
				case "priority":
					// Map priority levels to their corresponding names
					const priorityMap = {
						0: "No priority",
						1: "Low",
						2: "Medium",
						3: "High",
						4: "Urgent",
					};
					return priorityMap[group];
				default:
					return group;
			}
		};

		// Set the dynamic group title for each group
		groupedData = Object.entries(groupedData).map(([group, tickets]) => ({
			groupTitle: dynamicGroupTitle(group),
			tickets,
		}));

		setGroupedTickets(groupedData);
	};

	// Function to sort tickets based on the selected sorting option
	const sortTickets = () => {
		// Implement sorting logic based on the current value of sortOption
		const sortedData = [...groupedTickets];

		sortedData.forEach((group) => {
			switch (sortOption) {
				case "priority":
					group.tickets.sort((a, b) => b.priority - a.priority);
					break;
				case "title":
					group.tickets.sort((a, b) => a.title.localeCompare(b.title));
					break;
				default:
					break;
			}
		});

		setGroupedTickets(sortedData);
	};

	// Helper function to group tickets by status
	const groupByStatus = () => {
		const groupedData = {};
		tickets.forEach((ticket) => {
			const status = ticket.status;
			if (!groupedData[status]) {
				groupedData[status] = [];
			}
			groupedData[status].push(ticket);
		});
		return groupedData;
	};

	// Helper function to group tickets by user
	const groupByUser = () => {
		const groupedData = {};
		tickets.forEach((ticket) => {
			const user = ticket.userId;
			if (!groupedData[user]) {
				groupedData[user] = [];
			}
			groupedData[user].push(ticket);
		});
		return groupedData;
	};

	// Helper function to group tickets by priority
	const groupByPriority = () => {
		const groupedData = {};
		tickets.forEach((ticket) => {
			const priority = ticket.priority;
			if (!groupedData[priority]) {
				groupedData[priority] = [];
			}
			groupedData[priority].push(ticket);
		});
		return groupedData;
	};

	useEffect(() => {
		groupTickets();
	}, [groupBy]);

	useEffect(() => {
		sortTickets();
	}, [sortOption]);

	return (
		<div className="board">
			<Navbar
				groupBy={groupBy}
				setGroupBy={setGroupBy}
				sortOption={sortOption}
				setSortOption={setSortOption}
				groupTickets={groupTickets}
				sortTickets={sortTickets}
			/>

			{/* Render the Kanban board here using the 'groupedTickets' state */}
			{/* Display grouped and sorted tickets */}
			<div className="tickets">
				{groupedTickets.map((group) => (
					<Group key={group.groupTitle} group={group} groupBy={groupBy} />
				))}
			</div>
		</div>
	);
};

export default KanbanBoard;
