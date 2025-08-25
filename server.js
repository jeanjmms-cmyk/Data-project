const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Render define a porta
server.listen(PORT, () => {
  console.log(`🚀 JSON Server running on port ${PORT}`);
});
