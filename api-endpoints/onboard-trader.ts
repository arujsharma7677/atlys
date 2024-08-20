'use server';

import { APIResponse, Realm } from '@/templates/next-js-app-router/types/types';
import paths from './paths';
import { setCookies } from './set-cookies';

// This API is a server action - 'use server' is added at the top. This will only run on the server
export type OnboardTraderResponse = APIResponse & {
  data: {
    existingUser: 'true' | 'false';
    expires_in: string;
    realms: Realm[];
    token: string;
    token_type: 'Bearer';
    userId: number;
    errorMessage?: 'string';
  };
};

export const onboardTrader = async (contactNumber: string, otp: string) => {
  try {
    const onboardRes = await fetch(paths.ONBOARD_TRADERS(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: {
          action: 'VERIFY',
          contactNumber,
          enableWhatsAppCommunication: true,
          fcmId: null,
          newUser: true,
          otp,
          referralCode: '',
          roles: 'TRADER',
        },
      }),
      cache: 'no-store',
    });
    const res: OnboardTraderResponse = await onboardRes.json();
    if (res.status === 200) {
      await setCookies(res.data);
    }
    return res;
  } catch (error) {
    console.error(error);
    return;
  }
};
