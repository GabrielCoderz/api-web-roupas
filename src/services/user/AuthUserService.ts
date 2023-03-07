import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
    email: string;
    senha: string;
}

class AuthUserService {

    async execute({ email, senha }: AuthUserRequest) {

        const user = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("Email/password incorrect");
        }

        const passwordMatch = await compare(senha, user?.senha)

        if(!passwordMatch) {
            throw new Error("Email/password incorrect");
        }

        // Generate a TOKEN JWT
        const token = sign(
            {
                nome: user.nome,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id.toString(),
                expiresIn: '30d',
            }
        )

        return {
            id: user?.id,
            nome: user?.nome,
            email: user?.email,
            token: token,
        }
    }

}

export { AuthUserService }