module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0', 'localhost'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['pEwG6kIifpMi8jcLup+lrA==','cjLqy3HasulXoDVNpzzKbQ==','ewYiEQZB5hP1JGvNxl0ZsQ==','2wx+DsQYPNxqxuuTcIZPTw==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
