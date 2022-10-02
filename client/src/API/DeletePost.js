export const deletePost = async (postId) => {
  const url = `http://localhost:5000/api/posts/${postId}`;
  const token = JSON.parse(localStorage.getItem('profile')).token;

  const requestOptions = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };

  fetch(url, requestOptions);
};
