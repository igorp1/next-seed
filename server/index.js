const express = require('express')
const next = require('next')
const SlackBot = require('./helpers/slackBot')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare()
.then(() => {
    const server = express()
    
    // REGISTER CLEAN URLs 
    const pages = {
        '/blog/post' : { 
            masked : '/blog/:slug', 
            params : ['slug']    
        }
    }
    Object.keys(pages).map( page => {
        server.get(pages[page].masked, (req, res) => {
            const actualPage = page
            const queryParams = {}
            pages[page].params.map( param => { queryParams[param]=req.params[param] } )
            app.render(req, res, actualPage, queryParams)
        })
    })
    
    // REGISTER APIs
    server.use(['/api/user'], require('./user'));
    
    // REGISTER HANDLER
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    // START LISTENING
    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${PORT}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})