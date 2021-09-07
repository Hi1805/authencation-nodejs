const btn = document.querySelector('.btn');

const accessToken = localStorage.getItem('token');

if (accessToken) {
  axios
    .get('http://localhost:4000/api/login', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    })
    .then((response) => {
      console.log('run it');
    });
}

btn.addEventListener('click', function (event) {
  event.preventDefault();

  axios
    .post(
      'http://localhost:4000/api/login',
      {
        username: 'huy',
        password: '123',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      console.log(response);
      const data = response.data;
      localStorage.setItem('token', data.accessToken);
    });
});
