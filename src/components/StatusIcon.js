import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaCircleNotch } from "react-icons/fa6";

import { CiCircleMinus } from "react-icons/ci";

const StatusIcon = ({ status }) => {
	const getIcon = () => {
		switch (status) {
			case "In progress":
				return <FaCircleCheck className="status-icon" />;
			case "Todo":
				return <FaCircleHalfStroke className="status-icon" />;
			case "Backlog":
				return <FaCircleNotch className="status-icon" />;
			default:
				return <CiCircleMinus className="status-icon" />;
		}
	};

	return <div className="status-tag">{getIcon()}</div>;
};

export default StatusIcon;
