export const createPost = async (postData) => {
  const requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  };
  console.log(requestOptions);
  const url = 'http://localhost:5000/api/posts';
  fetch(url, requestOptions).then((response) => console.log(response.json()));
};
