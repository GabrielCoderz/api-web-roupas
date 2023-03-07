import prismaClient from "../../prisma";


class DetailUserService {
    async execute(user_id: string) {

        console.log(user_id)

        const user = await prismaClient.cliente.findFirst({
            where: {
                id: Number(user_id)
            },
            select: {
                id: true,
                nome: true,
                email: true,   
                cpf: true,
                telefone_fixo: true,
                celular: true,
                genero: true,             
            }
        })

        return user;
    }
}

export { DetailUserService }