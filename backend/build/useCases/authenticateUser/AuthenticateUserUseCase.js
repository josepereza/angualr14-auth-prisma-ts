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
exports.AuthenticateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const prismaClient_1 = require("../../prisma/prismaClient");
class AuthenticateUserUseCase {
    execute({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield prismaClient_1.prismaClient.user.findFirst({
                where: {
                    username
                }
            });
            if (!userExists)
                throw new Error("User or password incorrent!");
            const passwordMatch = (0, bcryptjs_1.compare)(password, userExists.password);
            if (!passwordMatch)
                throw new Error("User or password incorrent!");
            const token = (0, jsonwebtoken_1.sign)({}, 'process.env.TOKEN_SECRET', {
                subject: userExists.id,
                expiresIn: "20s"
            });
            return { token: token, user: userExists };
        });
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
