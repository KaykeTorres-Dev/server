import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserService } from "../services/LoginUserService";

class LoginUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as { email: string, password: string };
        
        const userService = new LoginUserService();
        const user = await userService.execute({ email, password });
        reply.send(user);
    }
}

export { LoginUserController }