const url = 'http://localhost:5000';
export const fetchData = async () => {
  const response = fetch(url);
  const data = await response.json();
  return data;
};
