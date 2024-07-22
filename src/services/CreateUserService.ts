import prismaClient from "../prisma";
import * as bcrypt from 'bcryptjs';

interface CreateUserProps {
  name: string,
  company: string,
  email: string,
  password: string
}

class CreateUserService {
  async execute({ name, company, email, password }: CreateUserProps) {
    if (!name || !company || !email || !password) {
      throw new Error("Preencha todos os campos!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        name,
        company,
        email,
        password: hashedPassword, // Store the hashed password
      },
    });

    return user;
  }
}


export { CreateUserService }