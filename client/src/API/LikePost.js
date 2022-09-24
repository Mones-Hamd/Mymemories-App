export const likePost = async (postId) => {
  const url = `http://localhost:5000/api/posts/${postId}/likes`;
  const requestOptions = {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(url, requestOptions).then((response) => response.json());
};
