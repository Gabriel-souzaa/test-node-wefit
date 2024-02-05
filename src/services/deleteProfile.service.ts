import { ProfileRepository } from "../repositories/profile.repository";
import { ErrorHandler } from "../utils/errors";


export class DeleteProfile {
  async execute(id: string) {
    const repository = new ProfileRepository();

    const profileExists = await repository.findById(id);

    if (!profileExists) throw new ErrorHandler(404, 'Perfil não existe');

    await repository.delete(id);
  }
}