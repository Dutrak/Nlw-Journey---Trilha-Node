import fastify from "fastify"
import { createTrip } from "./routes/create-trip"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { ConfirmTrip } from "./routes/confirm-trips";
import cors from '@fastify/cors'
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(ConfirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on port 3333")
})