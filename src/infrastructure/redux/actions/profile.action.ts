import {ProfileModel} from '../../../domain/models/profile.model';

export const ProfileActionType = {
  SET: 'SET_PROFILE',
  DELETE: 'DELETE_PROFILE',
};

const ProfileAction = () => {
  const setProfile = (data: ProfileModel) => ({
    type: ProfileActionType.SET,
    payload: data,
  });

  const deleteProfile = () => ({
    type: ProfileActionType.SET,
  });

  return {
    setProfile,
    deleteProfile,
  };
};

export default ProfileAction;
