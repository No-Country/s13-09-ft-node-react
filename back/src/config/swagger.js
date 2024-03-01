import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'HealthMate',
            description: "API endpoints services for HealthMate Mock webapp",
            // contact: {
            //   name: "admin",
            //   email: "admin@admin.com",
            //   url: ""
            // },
            version: '0.0.1',
        },
        servers: [{
                url: `http://localhost:${process.env.PORT}/`,
                description: "Local server"
            },
            {
                url: "https://s13-09-ft-node-react.onrender.com",
                description: "Live server"
            },
        ]
    },
    // looks for configuration in specified directories
    apis: ["src/routes/*.js"],
}
const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
        // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}
export default swaggerDocs