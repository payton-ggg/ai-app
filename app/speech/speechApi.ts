import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
	apiKey: process.env.ASSEMBLYAI_API_KEY,
});

const FILE_URL = "https://assembly.ai/sports_injuries.mp3";

const data = {
	audio: FILE_URL,
};

var transcript;

export const run = async () => {
	transcript = await client.transcripts.transcribe(data);
	console.log(transcript.text);
};
