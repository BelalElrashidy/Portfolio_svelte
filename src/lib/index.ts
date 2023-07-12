// place files you want to import through the `$lib` alias in this folder.
import type { Data } from '$lib/Data';
export { Data };

export async function comic(): Promise<Data> {
	{
		const email = 'b.abdelaal@innopolis.university';
		const params: URLSearchParams = new URLSearchParams({ email });

		// Fetch the ID
		const response: Response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
		const id: number = await response.json();

		// Fetch the data
		const dataResponse: Response = await fetch(
			`https://fwd.innopolis.university/api/comic?id=${id}`
		);
		const data: Data = await dataResponse.json();

		return data;
	}
}
