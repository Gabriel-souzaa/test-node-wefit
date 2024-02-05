const swaggerAutogen = require('swagger-autogen')()

const outputFile = './docs/swagger.json'
const endpointsFiles = ['./routes/index']

swaggerAutogen(outputFile, endpointsFiles)