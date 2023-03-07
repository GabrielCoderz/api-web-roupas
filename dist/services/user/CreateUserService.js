"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    execute({ nome, email, senha, cpf, telefone_fixo, celular }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Email incorrect");
            }
            const userAlreadyExists = yield prisma_1.default.cliente.findFirst({
                where: {
                    email: email
                }
            });
            if (userAlreadyExists) {
                throw new Error("User/Email already exists");
            }
            console.log('log: passwordHashing..');
            const passwordHash = yield (0, bcryptjs_1.hash)(senha, 8);
            console.log(passwordHash);
            const user = yield prisma_1.default.cliente.create({
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
            });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map