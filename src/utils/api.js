export async function fetchData(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Response-Type': 'application/json',
    },
  });

  const json = await response.json();
  return json;
}
