export const updatePost = async (postId, postData) => {
  const url = `http://localhost:5000/api/posts/${postId}`;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  };
  fetch(url, requestOptions).then((response) => response.json());
};
