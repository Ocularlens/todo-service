const response = (context, body, status = 200) => {
  return context.res = {
    // status: 200, /* Defaults to 200 */
    status,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  };
};

module.exports = response;