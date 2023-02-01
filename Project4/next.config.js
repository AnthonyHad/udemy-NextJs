const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'antho',
        mongodb_password: '3fgvQDk6lYobFBay',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-blog-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'antho',
      mongodb_password: '3fgvQDk6lYobFBay',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-blog',
    },
  };
};
