export const deletePost = async (postId) => {
  const url = `http://localhost:5000/api/posts/${postId}`;
  const requestOptions = {
    method: 'Delete',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(url, requestOptions);
};
