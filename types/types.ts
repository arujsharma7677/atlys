export type APIResponse = {
  error: boolean;
  message: string;
  status: number;
  success?: boolean;
};

export type Realm = {
  userRealmId: number;
  primaryRealm: boolean;
  parentRealmId: unknown;
  parentRealms: unknown;
  realmName: string;
  asgardUserId: number;
  role: string;
  realmIdentifier: string;
  systemUserId: number;
  contactNumber: string;
  email: string;
  additionalDetails: unknown[];
  name: string;
};

export type AuthData = {
  name: string;
  existingUser: string;
  realms: Realm[];
  token_type: string;
  realmName: string;
  expires_in: string;
  userId: number;
  token: string;
  roles?: {
    description: string;
    disabled: boolean;
    id: number | string;
    name: string;
    privileges: unknown[];
  }[];
  asgardUserId: number;
  realmIdentifier: string;
  contactNumber: string;
  systemUserId: number;
  nfc_commerce?: unknown;
  nfc_user_id?: number;
  businessName?: {
    traderDTO?: {
      name?: string;
    };
  };
  matrixServerUrl?: string;
  matrixToken?: string;
  matrixUserId?: string;
  deviceId?: string;
  role: string;
  userRealmId: number;
};
