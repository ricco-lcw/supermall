const URL_NAME = '/testTwo'

const BaseURL = process.env.NODE_ENV === 'production' ? '' : URL_NAME

export default BaseURL
