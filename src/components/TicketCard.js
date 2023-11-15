import React from "react";
import UserImage from "./UserImage";
import PriorityIcon from "./PriorityIcon";
import StatusIcon from "./StatusIcon";

const TicketCard = ({ ticket, groupBy }) => {
	return (
		<div className="ticket" key={ticket.id}>
			<div className="ticket-top">
				<p className="ticket-id">{ticket.id}</p>
				<UserImage userId={ticket.userId} />
			</div>
			<div className="ticket-mid">
				{groupBy !== "status" && <StatusIcon status={ticket.status} />}

				<p className="ticket-title">{ticket.title}</p>
			</div>
			<div className="ticket-foot">
				{groupBy !== "priority" && <PriorityIcon priority={ticket.priority} />}

				<div className="tag">{ticket.tag}</div>
			</div>
		</div>
	);
};

export default TicketCard;
