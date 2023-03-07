import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string;
    nome: string;
    telefone_fixo: string;
    celular: string;
}

class UpdateUserService {
    async execute({ user_id, nome, telefone_fixo, celular }: UserRequest) {

        try {
            const userAlreadyExists = await prismaClient.cliente.findFirst({
                where: {
                    id: Number(user_id),
                }
            })

            if(!userAlreadyExists) {
                throw new Error("User not exists!");
            }

            const userUpdated = await prismaClient.cliente.update({
                where: {
                    id: Number(user_id),
                },
                data: {
                    nome,
                    telefone_fixo,
                    celular,
                },
                select: {
                    nome: true,
                    email: true,
                    telefone_fixo: true,
                    celular: true,
                }
            })

            return userUpdated;
            
        } catch(err) {

        }
    }
}

export { UpdateUserService }