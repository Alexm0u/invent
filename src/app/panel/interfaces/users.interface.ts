// Generated by https://quicktype.io

export interface User {
  id:           number;
  username:     string;
  address:      string;
  email:        string;
  cityBased:    string;
  role:         Role;
}

export enum Role {
  Admin = 'Admin',
  Worker = 'Worker',
}
