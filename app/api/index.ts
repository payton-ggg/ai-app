export async function fetchModels() {
  const token = process.env.IO_NET;

  if (!token) throw new Error("Token is not defined!");

  const res = await fetch(
    "https://api.intelligence.io.solutions/api/v1/models",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // Вимикає кешування
    }
  );

  if (!res.ok) {
    throw new Error("Помилка при отриманні моделей");
  }

  const json = await res.json();

  return json.data?.map((model: { id: string }) => model.id) || [];
}
