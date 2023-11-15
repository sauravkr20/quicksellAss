import React from "react";
import TicketCard from "./TicketCard";
import userImage from "../images/user.jpg";
import { VscAdd } from "react-icons/vsc";
import { VscEllipsis } from "react-icons/vsc";
import StatusIcon from "./StatusIcon";
import PriorityIcon from "./PriorityIcon";

const Group = ({ group, groupBy }) => {
	return (
		<div key={group.groupTitle} className="tickets-group">
			<div className="group-title">
				{groupBy === "status" && (
					<StatusIcon status={group.tickets[0].status} />
				)}
				{groupBy === "priority" && (
					<PriorityIcon priority={group.tickets[0].priority} />
				)}
				<h2>{group.groupTitle}</h2>{" "}
				<span className="group-size">{group.tickets.length}</span>
				<div className="user-image-container">
					{groupBy === "user" && (
						<img src={userImage} alt="User" className="user-image" />
					)}
				</div>
				<div className="group-title-icons">
					<button>
						<VscAdd className="group-title-icon" />
						<VscEllipsis className="group-title-icon" />
					</button>
				</div>
			</div>
			{group.tickets.map((ticket) => (
				<TicketCard key={ticket.id} ticket={ticket} groupBy={groupBy} />
			))}
		</div>
	);
};

export default Group;
