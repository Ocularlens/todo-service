const ApiError = require('../errors/apiError');
const client = require('./client');

const checkAuth = (request) => {
  if (!request.headers['authorization']) throw new ApiError('Unauthenticated', 401);

  const token = request.headers['authorization'].split(' ')[1];

  return client(process.env.VERIFY_URL, {
    method: 'POST',
    body: JSON.stringify({ token })
  }).then(async res => {
    if (!res.ok) throw new ApiError('Unauthenticated', 401);

    const data = await res.json();

    return data.userId;
  });
}

module.exports = checkAuth;