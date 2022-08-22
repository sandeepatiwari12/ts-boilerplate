import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AuthState } from './auth.types';
const initialState: AuthState = {
  isAuthorized: true,
  lastUserData: {
    userName: '',
    profilePhotoId: '',
    firstName: '',
  },
  userData: {
    name: '',
    uuid: '',
    profilePhotoId: '',
    username: '',
    userId: 0,
    userModes: [],
  },
  sessionData: {
    userId: 0,
    userProfilePhotoId: '',
    impersonatorId: null,
    impersonatorName: null,
    impersonatorEmail: null,
    name: '',
    emailAddress: '',
    designation: '',
    organization: '',
    userModes: [],
    roles: [],
    userUUID: '',
    authenticationProvider: '',
    identifyingAttributes: {
      studentId: '',
      accountId: '',
      collegeName: '',
      userOwnerEntityId: '',
      userOwnerEntityType: '',
      accountName: '',
      collegeId: '',
      collegeLogoId: null,
      accountLogoId: null,
      userOwnerEntityStatus: '',
    },
    emailVerified: false,
  },
  accountData: {
    accountUser: '',
    batches: [],
    code: '',
    colleges: [],
    id: 0,
    logoDocumentId: '',
    name: '',
    status: '',
    type: '',
    isAccountOnboarded: false,
  },
  accountConfigurations: {
    isLearnEnabled: false,
  },
  errors: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
      state.isAuthorized = true;
    },
    removeUserData: (state) => {
      state.userData = initialState.userData;
      state.sessionData = initialState.sessionData;
      state.isAuthorized = false;
    },
    setLastUserData: (state, action: PayloadAction<any>) => {
      state.lastUserData = action.payload;
    },
    removeLastUserData: (state) => {
      state.lastUserData = initialState.lastUserData;
    },
    setAccountConfigurations: (state, action: PayloadAction<any>) => {
      state.accountConfigurations = action.payload;
    },
    removeAccountConfigurations: (state) => {
      state.accountConfigurations = initialState.accountConfigurations;
    },
    setSessionData: (state, action: PayloadAction<any>) => {
      state.sessionData = action.payload;
    },
    setAccountData: (state, action: PayloadAction<any>) => {
      if (action.payload.status === 'ONBOARDED') {
        action.payload.isAccountOnboarded = true;
      } else {
        action.payload.isAccountOnboarded = false;
      }
      state.accountData = action.payload;
    },
  },
});
export const {
  setUserData,
  removeUserData,
  setLastUserData,
  removeLastUserData,
  setAccountConfigurations,
  removeAccountConfigurations,
  setSessionData,
  setAccountData,
} = authSlice.actions;
export const selectLastUserData = (state: RootState) => state.auth.lastUserData;
export const selectUserData = (state: RootState) => state.auth.userData;
export const selectUserSessionData = (state: RootState) => state.auth.sessionData;
export const selectAccountConfiguration = (state: RootState) => state.auth.accountConfigurations;
export const selectisAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectAccountData = (state: RootState) => state.auth.accountData;
export const selectAccountIsOnboarded = (state: RootState) =>
  state.auth.accountData.isAccountOnboarded;

export default authSlice.reducer;
