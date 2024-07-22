import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, company, email, password } = request.body as { name: string, company: string, email: string, password: string };
        
        const userService = new CreateUserService();
        const user = await userService.execute({ name, company, email, password });
        reply.send(user);
    }
}

export { CreateUserController }