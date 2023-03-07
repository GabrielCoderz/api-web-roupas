import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone_fixo: string;
    celular: string;
}

class CreateUserService {

    async execute({ nome, email, senha, cpf, telefone_fixo, celular }: UserRequest) {

        if(!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClient.Cliente.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("User/Email already exists");
        }

        console.log('log: passwordHashing..')
        const passwordHash = await hash(senha, 8);

        console.log(passwordHash)

        const user = await prismaClient.Cliente.create({
            data: {
                nome: nome,
                email: email,
                senha: passwordHash,
                cpf: cpf,
                telefone_fixo: telefone_fixo,
                celular: celular,
            },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })
        
        return user;
    }

}

export { CreateUserService }