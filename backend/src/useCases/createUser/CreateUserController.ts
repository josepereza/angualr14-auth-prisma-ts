import { Request, response, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      username,
      password
    } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const user = await createUserUseCase.execute({
      name,
      username,
      password,
    });

    return response.json(user);
  }
  async prueba(request: Request, response: Response){
    const createUserUseCase = new CreateUserUseCase();
    const prueba2= await  createUserUseCase.prueba()
     response.send(prueba2)
  }
  async listado(request:Request, response:Response){
    const createUserUseCase = new CreateUserUseCase();
    const usuarios=await createUserUseCase.listado()
    response.send(usuarios)
  }

  async profile(request:Request, response:Response){
    const id = (request.params.id)
    console.log(id)
    const createUserUseCase = new CreateUserUseCase();
    const user=await createUserUseCase.profile(id)
    response.send(user)
  }
}

export { CreateUserController }
