import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiCellSignalLowBold } from "react-icons/pi";

import { PiCellSignalMediumBold } from "react-icons/pi";

import { PiCellSignalHighBold } from "react-icons/pi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import {
// 	PiCellSignalLowBold,
// 	PiCellSignalMediumBold,
// 	PiCellSignalHighBold,
// } from "react-icons/pi";

const PriorityIcon = ({ priority }) => {
	const getIcon = () => {
		switch (priority) {
			case 0:
				return <HiOutlineDotsHorizontal className="priority-icon" />;
			case 1:
				return <PiCellSignalLowBold className="priority-icon" />;
			case 2:
				return <PiCellSignalMediumBold className="priority-icon" />;
			case 3:
				return <PiCellSignalHighBold className="priority-icon" />;
			default:
				return <FaTemperatureThreeQuarters className="priority-icon" />;
		}
	};

	return <div className="tag">{getIcon()}</div>;
};

export default PriorityIcon;
