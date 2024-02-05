import axios from "axios";
import { AddressEntity, ProfileEntity } from "../entities";

interface ProfileData extends ProfileEntity {
  address_profile: AddressEntity
}

describe('Profile', () => {
  const axiosService = axios.create({
    baseURL: 'http://localhost:3333',
  });

  it('Create Profile Pessoa Fisica', async () => {
    const profile: ProfileData = {
      "name": "Gabriel",
      "cpf": "1234",
      "client": "PF",
      "phone": "19993936614",
      "home_phone": "",
      "email": "gabriel_tests@gmail.com",
      "address_profile": {
        "zip_code": "13090768",
        "steet": "Novo horizonte",
        "numbero": "337",
        "complement": "",
        "city": "Campinas",
        "state": "SP",
        "neighborhood": "Chacara da barra"
      }
    }

    const { data } = await axiosService.post('/profile/create', profile, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    await axiosService.delete(`/profile/${data.data.id}`);

    expect(data.success).toBe(true);
  });

  it('Create Profile Pessoa Juridica', async () => {
    const profile: ProfileData = {
      "name": "Gabriel",
      "cpf": "1234",
      "cnpj": "11212",
      "client": "PF",
      "phone": "19993936614",
      "home_phone": "",
      "email": "gabriel_tests@gmail.com",
      "address_profile": {
        "zip_code": "13090768",
        "steet": "Novo horizonte",
        "numbero": "337",
        "complement": "",
        "city": "Campinas",
        "state": "SP",
        "neighborhood": "Chacara da barra"
      }
    }

    const { data } = await axiosService.post('/profile/create', profile, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    await axiosService.delete(`/profile/${data.data.id}`);

    expect(data.success).toBe(true);
  });
});