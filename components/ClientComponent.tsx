import React from "react";

const ClientComponent = ({ data }: { data: any }) => {
	return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default ClientComponent;
