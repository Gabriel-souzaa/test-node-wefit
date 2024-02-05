import { NextFunction, Request, Response } from "express";
import { CreateProfile } from "../services/createProfile.service";
import { DeleteProfile } from "../services/deleteProfile.service";

export class Profile {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        name,
        cpf,
        cnpj,
        client,
        phone,
        home_phone,
        email,
        address_profile: {
          zip_code,
          steet,
          numbero,
          complement,
          city,
          state,
          neighborhood
        }
      } = request.body;

      const service = new CreateProfile();

      const result = await service.execute({
        name,
        cpf,
        cnpj,
        client,
        phone,
        home_phone,
        email,
        address_profile: {
          zip_code,
          steet,
          numbero,
          complement,
          city,
          state,
          neighborhood
        }
      });


      return response.json({
        success: true,
        data: result
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        id
      } = request.params;

      const service = new DeleteProfile();

      await service.execute(id);

      return response.json({
        success: true,
      });
    } catch (err) {
      next(err);
    }
  }
}