export default async function fetcher(...args: [RequestInfo, RequestInit]) {
  try {
    const res = await fetch(...args);
    const data = await res.json();

    if (res.ok) {
      return data;
    }

    const error: any = new Error(res.statusText);
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
