import ClientComponent from "@/components/ClientComponent";

const Page = async () => {
	const res = await fetch(
		"https://api.intelligence.io.solutions/api/v1/chat/completions",
		{
			method: "POST",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer io-v2-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6ImYxYjcwNmE2LWRlYTEtNDA3MC1iMDAyLTRmMzkwNTQ4YjIxOSIsImV4cCI6NDg5ODc1MDI3Nn0.DNVcPuWrEcPcXdHGXv9RrmSVcey8B2ntw0C8nTnkUkXhGCPP7St0wTQQugJr2M-e0w5LfAfaMhJ-5rELKBCJFg",
				"content-type": "application/json",
			},
			body: JSON.stringify({
				model: "deepseek-ai/DeepSeek-R1",
				messages: [
					{
						role: "user",
						content:
							"Привіт, я хочу дізнатися про твої можливості. Що ти можеш робити?",
					},
				],
			}),
		}
	);

	const data = await res.json();

	return (
		<div>
			<h1>Результат з SSR:</h1>
			<ClientComponent data={data} />
		</div>
	);
};

export default Page;
