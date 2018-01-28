const env = process.env.NODE_ENV || 'development'

module.exports = {
  isDevelopment: env === 'development',
  isProduction: env === 'production'
}
