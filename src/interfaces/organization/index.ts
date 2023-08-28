import { ConfigurationInterface } from 'interfaces/configuration';
import { DataPrivacyInterface } from 'interfaces/data-privacy';
import { LandscapeInterface } from 'interfaces/landscape';
import { SecurityInterface } from 'interfaces/security';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  configuration?: ConfigurationInterface[];
  data_privacy?: DataPrivacyInterface[];
  landscape?: LandscapeInterface[];
  security?: SecurityInterface[];
  user?: UserInterface;
  _count?: {
    configuration?: number;
    data_privacy?: number;
    landscape?: number;
    security?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
