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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
class CreateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password } = request.body;
            const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
            const user = yield createUserUseCase.execute({
                name,
                username,
                password,
            });
            return response.json(user);
        });
    }
    prueba(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
            const prueba2 = yield createUserUseCase.prueba();
            response.send(prueba2);
        });
    }
    listado(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
            const usuarios = yield createUserUseCase.listado();
            response.send(usuarios);
        });
    }
    profile(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (request.params.id);
            console.log(id);
            const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
            const user = yield createUserUseCase.profile(id);
            response.send(user);
        });
    }
}
exports.CreateUserController = CreateUserController;
