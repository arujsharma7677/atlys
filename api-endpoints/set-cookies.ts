'use server';

import { COOKIES } from '@/constants/constants';
import type { Realm } from '@/types/types';
import { getOwnerRealm } from '@/utils/storage.utils';
import { cookies } from 'next/headers';

export type Payload = {
  existingUser: 'true' | 'false';
  expires_in: string;
  realms: Realm[];
  token: string;
  token_type: 'Bearer';
  userId: number;
  errorMessage?: 'string';
};

export const setCookies = async (payload: Payload) => {
  const ownerRealm = getOwnerRealm(payload.realms);
  cookies().set(COOKIES.TOKEN, payload.token, {
    httpOnly: true,
    expires: new Date('01 Jan 2099'),
  });
  cookies().set(COOKIES.REALM_IDENTIFIER, ownerRealm.realmIdentifier, {
    httpOnly: true,
    expires: new Date('01 Jan 2099'),
  });
  cookies().set(COOKIES.SYSTEM_USER_ID, ownerRealm.systemUserId.toString(), {
    httpOnly: true,
    expires: new Date('01 Jan 2099'),
  });
  cookies().set(COOKIES.REALM_ID, ownerRealm.userRealmId.toString(), {
    httpOnly: true,
    expires: new Date('01 Jan 2099'),
  });
  cookies().set(COOKIES.ASGARD_USER_ID, ownerRealm.asgardUserId.toString(), {
    httpOnly: true,
    expires: new Date('01 Jan 2099'),
  });

  return {
    ...payload,
    ...ownerRealm,
  };
};
