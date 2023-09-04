import http from "node:http"

const settings = {
  PORT: process.env.PORT || 3333,
  HOSTNAME: process.env.HOSTNAME || "127.0.0.1"
}

const server = http.createServer((request, response) => {
  response.end("Server Works!")
})

server.listen(settings.HOSTNAME, settings.PORT, () => {
  console.log(`Server on ${HOSTNAME}:${PORT}`)
})

export { server }
