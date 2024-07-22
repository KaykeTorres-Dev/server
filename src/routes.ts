import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import { CreateUserController } from "./controllers/CreateUserController";
import { LoginUserController } from "./controllers/LoginUserController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    // fastify.get("/get-user", async (request: FastifyRequest, reply: FastifyReply) => {
    //     return { ok: true }
    // });

    fastify.post("/create-user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    });

    fastify.post("/login-user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new LoginUserController().handle(request, reply);
    });
}