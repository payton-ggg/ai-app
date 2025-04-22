const Page = async () => {
	const res = await fetch(
		"https://api.intelligence.io.solutions/api/v1/models",
		{
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer io-v2-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6ImYxYjcwNmE2LWRlYTEtNDA3MC1iMDAyLTRmMzkwNTQ4YjIxOSIsImV4cCI6NDg5ODc1MDI3Nn0.DNVcPuWrEcPcXdHGXv9RrmSVcey8B2ntw0C8nTnkUkXhGCPP7St0wTQQugJr2M-e0w5LfAfaMhJ-5rELKBCJFg",
			},
			cache: "no-store", // Вимикає кешування
		}
	);

	if (!res.ok) {
		throw new Error("Помилка при отриманні моделей");
	}

	const json = await res.json();

	// Витягаємо тільки id
	const onlyIds = json.data?.map((model: { id: string }) => model.id) || [];

	return (
		<div>
			<h2>Список моделей:</h2>
			<pre>{JSON.stringify(onlyIds, null, 2)}</pre>
		</div>
	);
};

export default Page;
