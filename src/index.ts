import { server } from "./server"
// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err: unknown) {
    server.log.error(err)
    process.exit(1)
  }
}

void start();