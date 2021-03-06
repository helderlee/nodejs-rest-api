module.exports = {
  response: {
    INTERNAL_SERVER_ERROR: {
      status: 500,
      message: 'Internal Server Error',
      body: {}
    } 
  },
  databaseStatus: {
    DATABASE_CONNECTED: 'Database connected successfully',
    DATABASE_ERROR: 'Database error',
    ENTITY_CREATED: 'Entity Created',
    ENTITY_MODIFIED: 'Entity Modified',
    ENTITY_FETCHED: 'Entity Fetched',
    ENTITY_DELETED: 'Entity Deleted'
  },
  controllerStatus: {
    BAD_REQUEST: 'Required fields missing'
  },
  serviceStatus: {
    USER_CREATED: 'User created successfully'
  }
}