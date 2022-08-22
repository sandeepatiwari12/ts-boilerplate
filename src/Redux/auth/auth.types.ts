export interface AuthResponse {
  name: string;
  uuid: string;
  profilePhotoId: string;
  username: string;
  userId: number;
  userModes: string[];
}
export interface IAccountConfigurations {
  isLearnEnabled: boolean;
}
export interface ILastUserData {
  userName: string;
  profilePhotoId: string;
  firstName: string;
}
export interface AuthState {
  readonly isAuthorized: boolean;
  readonly userData: AuthResponse;
  readonly accountConfigurations: IAccountConfigurations;
  readonly lastUserData: ILastUserData;
  readonly errors?: string;
  readonly sessionData: ISessionData;
  readonly accountData: IAccountData;
}
export interface ISessionData {
  userId: number;
  userProfilePhotoId: string;
  impersonatorId?: null;
  impersonatorName?: null;
  impersonatorEmail?: null;
  name: string;
  emailAddress: string;
  designation: string;
  organization: string;
  userModes?: string[] | null;
  roles?: string[] | null;
  userUUID: string;
  authenticationProvider: string;
  identifyingAttributes: IdentifyingAttributes;
  emailVerified: boolean;
}
export interface IdentifyingAttributes {
  studentId: string;
  accountId: string;
  collegeName: string;
  userOwnerEntityId: string;
  userOwnerEntityType: string;
  accountName: string;
  collegeId: string;
  collegeLogoId?: null;
  accountLogoId?: null;
  userOwnerEntityStatus: string;
}
export interface IAccountData {
  accountUser: string;
  batches: string[];
  code: string;
  colleges: string[];
  id: number;
  logoDocumentId: string;
  name: string;
  status: string;
  type: string;
  isAccountOnboarded: boolean;
}
