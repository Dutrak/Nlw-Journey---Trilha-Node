import fastify from "fastify"
import { createTrip } from "./routes/create-trip"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { ConfirmTrip } from "./routes/confirm-trips";
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(ConfirmTrip)

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on port 3333")
})