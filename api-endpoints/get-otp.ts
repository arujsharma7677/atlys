import { APIResponse } from '@/templates/next-js-app-router/types/types';
import paths from './paths';

export const getOTP = async (contactNumber: string) => {
  try {
    const res = await fetch(paths.GET_OTP(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { contactNumber },
      }),
      cache: 'no-store',
    });
    const result: APIResponse = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return;
  }
};
