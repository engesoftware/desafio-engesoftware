const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8000'
  }
];module.exports = proxy;