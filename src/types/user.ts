export interface User {
  lastLogin: number;
  userStatus: "ENABLED" | "DISABLED" | string;
  created: number;
  accountType: "BACKENDLESS" | string;
  socialAccount: string | null;
  ownerId: string;
  oAuthIdentities: any;
  name: string;
  ___class: string;
  blUserLocale: string;
  "user-token": string;
  updated: number;
  email: string;
  objectId: string;
}
