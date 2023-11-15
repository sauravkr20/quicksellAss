import React from "react";

const UserImage = ({ userId }) => {
	const userImages = {
		"usr-1":
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXo8keKEve3pixl1qWoyZgnfg80RYKBH_kxH74gnXEOHb2Lg7wVMa68aPWvZp4weKXQk&usqp=CAU",
		"usr-2":
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDv04JPI_kch-h7tXYYldRwx00HuMCYw0GbhByO4AQMvAWI0oNlfB9wGyk2RFm2nZ7KA0&usqp=CAU",
		"usr-3":
			"https://images.generated.photos/Nn1KOnI3DG6f424crD8rqG8USLB8dQky7nP08S7jGhg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUwNTkyLmpwZw.jpg",
		"usr-4":
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFz7hyrXLrt_lwS4TQAC23LMA3zrsXwCVjBmPpghjtRtmnyg2jOpGqeLpLtS_deO56pg&usqp=CAU",
		"usr-5":
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkASDe7LVHBWiJXFzFICDmoyN591wqIpEVwyg3e5i-8bx40ESnd2vtxpuFyJGSkrjOFo&usqp=CAU",
	};

	const userimg = userImages[userId];

	return (
		<div className="user-image-container">
			<img src={userimg} alt="userImage" className="user-image" />
		</div>
	);
};

export default UserImage;
