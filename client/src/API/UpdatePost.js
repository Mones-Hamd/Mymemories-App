export const updatePost = async (postId, postData) => {
  const url = `http://localhost:5000/api/posts/${postId}`;
  const token = JSON.parse(localStorage.getItem('profile')).token;
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },

    body: JSON.stringify(postData),
  };
  fetch(url, requestOptions).then((response) => response.json());
};
