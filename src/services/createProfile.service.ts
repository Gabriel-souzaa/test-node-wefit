import { AddressEntity, ProfileEntity } from "../entities";
import { ProfileRepository } from "../repositories/profile.repository";
import { ErrorHandler } from "../utils/errors";

interface ProfileData extends ProfileEntity {
  address_profile: AddressEntity
}

export class CreateProfile {
  async execute(data: ProfileData) {
    const repository = new ProfileRepository();

    if (data.client === 'PJ' && !data.cnpj) throw new ErrorHandler(404, "Cnpj é obrigatório");

    const profileEmailExists = await repository.findByEmail(data.email);

    if (profileEmailExists) throw new ErrorHandler(404, "E-mail já cadastrado.")

    const profileCpfExists = await repository.findByCpf(data.cpf);

    if (profileCpfExists) throw new ErrorHandler(404, "Cpf já cadastrado.");

    const profileCnpjExists = await repository.findByCnpj(data.cnpj);

    if (profileCnpjExists && data.client === 'PJ') throw new ErrorHandler(404, "Cnpj já cadastrado.");

    const response = await repository.create(data);

    return response;
  }
}