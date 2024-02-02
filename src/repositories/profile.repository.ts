import { AddressEntity, ProfileEntity } from "../entities";
import { prisma } from "../prisma";
import { ErrorHandler } from "../utils/errors";

interface ProfileData extends ProfileEntity {
  address_profile: AddressEntity
}

export class ProfileRepository {
  async create(data: ProfileData): Promise<ProfileEntity> {
    try {
      const response = await prisma.$transaction(async (prismaTransaction) => {
        const profileCommercial = await prismaTransaction.profileCommercial.create({
          data: {
            client: data.client,
            cpf: data.cpf,
            email: data.email,
            home_phone: data.home_phone,
            name: data.name,
            phone: data.phone,
            cnpj: data.cnpj,
          }
        });

        if (!profileCommercial) throw new ErrorHandler(404, "Não foi possível criar informações do perfil.")


        await prismaTransaction.addressProfile.create({
          data: {
            profile_id: profileCommercial.id,
            ...data.address_profile
          }
        });

        return profileCommercial;
      });

      return response;
    } catch (err) {
      throw new ErrorHandler(500, "Não foi possível criar perfil.")
    }
  }

  async findByCpf(cpf: string): Promise<ProfileEntity> {
    try {
      const response = await prisma.profileCommercial.findFirst({
        where: {
          cpf
        }
      });

      return response;
    } catch (err) {
      throw new ErrorHandler(500, "Não foi possível buscar perfil.");
    }
  }

  async findByCnpj(cnpj: string): Promise<ProfileEntity> {
    try {
      const response = await prisma.profileCommercial.findFirst({
        where: {
          cnpj
        }
      });

      return response;
    } catch (err) {
      throw new ErrorHandler(500, "Não foi possível buscar perfil.");
    }
  }

  async findByEmail(email: string): Promise<ProfileEntity> {
    try {
      const response = await prisma.profileCommercial.findFirst({
        where: {
          email
        }
      });

      return response;
    } catch (err) {
      throw new ErrorHandler(500, "Não foi possível buscar perfil.");
    }
  }
}