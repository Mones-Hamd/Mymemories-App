export const likePost = async (postId) => {
  const url = `http://localhost:5000/api/posts/${postId}/likes`;
  const token = JSON.parse(localStorage.getItem('profile')).token;

  const requestOptions = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };
  fetch(url, requestOptions).then((response) => response.json());
};
