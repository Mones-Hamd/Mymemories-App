export const createPost = async (postData) => {
  const token = JSON.parse(localStorage.getItem('profile')).token;

  const requestOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },

    body: JSON.stringify(postData),
  };

  const url = 'http://localhost:5000/api/posts';
  fetch(url, requestOptions).then((response) => response.json());
};
