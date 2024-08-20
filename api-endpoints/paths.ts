export const getWorkflowURL = (withAuth = false, realmId = '', userId = '') => {
  if (!withAuth) {
    return `${process.env.NEXT_PUBLIC_BASE_API_URL}/${realmId || 1}/${
      userId || 1
    }/v1/execution/service/runWithNoAuth`;
  }
  return `${process.env.NEXT_PUBLIC_BASE_API_URL}/${realmId}/${userId}/v1/execution/service/run`;
};

// Sample API paths
const paths = {
  GET_OTP: () => `${getWorkflowURL()}/user-login-otp-notification-service-config` as const,
  ONBOARD_TRADERS: () => `${getWorkflowURL()}/onboard-traders` as const,
  CREATE_USER_PROFILE: (rId: string, uId: string) =>
    `${getWorkflowURL(true, rId, uId)}/create-mn-basic-user-profile` as const,
} as const;

export default paths;
