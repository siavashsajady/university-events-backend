module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7c827ffb51e4e2b1ee939aa3e98665c'),
  },
});
