import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalRoute } from './routes/create-goal'
import { createCompletionRoute } from './routes/create-completion'
import { getPendingGoalsRoute } from './routes/get-pending-goals'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

//Register get routes
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)

//Register post routes
app.register(createGoalRoute)
app.register(createCompletionRoute)

//Start the server
app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
