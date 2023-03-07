import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    
    async handle(request: Request, response: Response) {
        const { nome, email, senha, cpf, telefone_fixo, celular } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            nome,
            email,
            senha,
            cpf,
            telefone_fixo,
            celular
        });

        return response.json(user);
    } 

}

export { CreateUserController }