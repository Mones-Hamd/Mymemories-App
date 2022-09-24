export const createPost = async (postData) => {
  const requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  };

  const url = 'http://localhost:5000/api/posts';
  fetch(url, requestOptions).then((response) => response.json());
};
