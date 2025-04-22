import ClientComponent from "@/components/ClientComponent";

const Page = async () => {
	const res = await fetch(
		"https://api.intelligence.io.solutions/api/v1/chat/completions",
		{
			method: "POST",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${process.env.IO_API_KEY}`,
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
