import { APIResponse } from '@/templates/next-js-app-router/types/types';

export const apiWithCache = async () => {
  try {
    const apiResponse = await fetch(`Add path here`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // payload here
      }),
      cache: 'force-cache',
      next: {
        tags: ['Add cache tag here'], // You can clear the cache with cache tag later:  https://nextjs.org/docs/app/api-reference/functions/fetch#optionsnexttags
      },
    });
    const res: APIResponse = await apiResponse.json();
    return res;
  } catch (error) {
    console.error(error);
    return;
  }
};
