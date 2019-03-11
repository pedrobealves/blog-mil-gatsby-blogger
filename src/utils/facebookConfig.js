let facebookConfig

try {
  facebookConfig = require('../../.facebook')
} catch (e) {
  facebookConfig = {
    production: {
      apiId: process.env.API_ID,
    },
  }
} finally {
  const { apiId } = facebookConfig.production
  if (!apiId) {
    throw new Error('Facebook api key need to be provided.')
  }
}

export default (process.env.NODE_ENV === 'development'
  ? facebookConfig.development
  : facebookConfig.production)
