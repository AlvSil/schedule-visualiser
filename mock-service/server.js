const path = require('path');
const jsonServer = require('json-server');
const fs = require('fs')

function createApp() {
    const server = jsonServer.create();

    const router = jsonServer.router(path.join(__dirname, 'db.json'));

    const customRoutes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')));
    const routesRewriter = jsonServer.rewriter(customRoutes);
    server.use(routesRewriter);

    const middlewares = jsonServer.defaults();
    server.use(middlewares);

    server.use((req, res, next) => {
        if (req.method === 'GET') {

        }
        // Continue to JSON Server router
        next()
    })

    server.use(router);

    return server;
}

app = createApp();
app.listen(3001);
