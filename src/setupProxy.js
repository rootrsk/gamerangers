const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rootrsk-gamerangers-api.herokuapp.com/',
      changeOrigin: true,
    })
  );
};