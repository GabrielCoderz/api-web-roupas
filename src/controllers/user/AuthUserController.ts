import { Request, Response } from "express";
import { AuthUserService } from '../../services/user/AuthUserService';

class AuthUserController {

    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const authUserService = new AuthUserService();

        const session = await authUserService.execute({
            email,
            senha
        })

        return response.json(session);
    }
}

export { AuthUserController }