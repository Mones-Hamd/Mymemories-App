export const signUp = async (formData) => {
  const url = 'http://localhost:5000/user/signup';
  const requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  };
  const response = await fetch(url, requestOptions);
  const result = await response.json();

  localStorage.setItem('profile', JSON.stringify(result));
};
export const signIn = async (formData) => {
  const url = 'http://localhost:5000/user/signin';
  const requestOptions = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  };
  const response = await fetch(url, requestOptions);
  const result = await response.json();

  localStorage.setItem('profile', JSON.stringify(result));
};
