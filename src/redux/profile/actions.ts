export const getProfile = (profileId: string) =>
    ({type: 'Profile/get_profile', profileId})