import { AddressEntity } from "./address.entity";

export class ProfileEntity {
  id?: string;
  name: string;
  cpf: string;
  cnpj?: string;
  client: 'PJ' | 'PF' | string;
  phone: string;
  home_phone?: string;
  email: string;

  address_id?: string;
}