// TODO: create client
class CustomError extends Error {
  response: Response;

  data: any;
}

export default async function fetcher<Response>(
  ...args: [RequestInfo, RequestInit]
): Promise<Response> {
  try {
    const res = await fetch(...args);
    const data = await res.json();

    if (res.ok) {
      return data as Response;
    }

    const error = new CustomError(data.message || res.statusText);
    error.response = res;
    error.data = data;

    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }

    throw error;
  }
}
