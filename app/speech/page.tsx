import React from "react";
import { run } from "./speechApi";

const page = () => {
	return (
		<div>
			Text in <p>console</p>
			<button onClick={() => run()}></button>
		</div>
	);
};

export default page;
