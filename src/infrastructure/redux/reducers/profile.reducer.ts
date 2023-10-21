import {ProfileModel} from '../../../domain/models/profile.model';
import {ProfileActionType} from '../actions/profile.action';

export interface ProfileState {
  profile: ProfileModel | null;
}

export const initialState: ProfileState = {
  profile: null,
};

const profileReducer = (state: ProfileState = initialState, action: any) => {
  switch (action.type) {
    case ProfileActionType.SET:
      return {...state, profile: action.payload};
    case ProfileActionType.DELETE:
      return {...state, profile: null};
    default:
      return state;
  }
};

export default profileReducer;
