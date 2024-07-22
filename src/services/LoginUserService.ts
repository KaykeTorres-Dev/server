import prismaClient from "../prisma";
import * as bcrypt from 'bcryptjs';

interface LoginUserProps {
  email: string,
  password: string
}

class LoginUserService {
    async execute({ email, password }: LoginUserProps ) {
      debugger

      const user = await prismaClient.user.findUnique({
        where: {
          email: email,
        }
      })

      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      

      const isValidPassword = await bcrypt.compare(password, user.password);
      console.log(password, user.password);

      if (!isValidPassword) {
        throw new Error("Email ou senha incorreta");
      }

      return user;
    }
}

export { LoginUserService }