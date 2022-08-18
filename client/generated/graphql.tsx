import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Barber = {
  __typename?: 'Barber';
  barberID: Scalars['String'];
  createdAt: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phoneNumber: Scalars['String'];
  schedule: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  createdAt: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  deleteUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  userLogin: UserResponse;
  userLogout: Scalars['Boolean'];
  userRegister: UserResponse;
};


export type MutationChangePasswordArgs = {
  isBarber: Scalars['Boolean'];
  passWord: Scalars['String'];
  token: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
  isBarber: Scalars['Boolean'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
  isBarber: Scalars['Boolean'];
};


export type MutationUserLoginArgs = {
  isBarber: Scalars['Boolean'];
  passWord: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationUserRegisterArgs = {
  options: RegistrationInput;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getBarbers: Array<Barber>;
  getClients: Array<Client>;
  me?: Maybe<Client>;
};

export type RegistrationInput = {
  barberID?: InputMaybe<Scalars['String']>;
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  schedule?: InputMaybe<Scalars['String']>;
  ssn?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  isbarber: Scalars['Boolean'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<UserError>>;
  user?: Maybe<Client>;
};

export type UserError = {
  __typename?: 'userError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegularErrorFragment = { __typename?: 'userError', field: string, message: string };

export type ChangePasswordMutationVariables = Exact<{
  isBarber: Scalars['Boolean'];
  passWord: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', user?: { __typename?: 'Client', username: string, id: number } | null, errors?: Array<{ __typename?: 'userError', field: string, message: string }> | null } };

export type ForgotPasswordMutationVariables = Exact<{
  isBarber: Scalars['Boolean'];
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  isBarber: Scalars['Boolean'];
  passWord: Scalars['String'];
  userName: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserResponse', user?: { __typename?: 'Client', id: number, username: string } | null, errors?: Array<{ __typename?: 'userError', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', userLogout: boolean };

export type RegisterMutationVariables = Exact<{
  options: RegistrationInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', userRegister: { __typename?: 'UserResponse', user?: { __typename?: 'Client', id: number, username: string } | null, errors?: Array<{ __typename?: 'userError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Client', id: number, username: string } | null };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on userError {
  field
  message
}
    `;
export const ChangePasswordDocument = gql`
    mutation changePassword($isBarber: Boolean!, $passWord: String!, $token: String!) {
  changePassword(isBarber: $isBarber, passWord: $passWord, token: $token) {
    user {
      username
      id
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($isBarber: Boolean!, $email: String!) {
  forgotPassword(isBarber: $isBarber, email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($isBarber: Boolean!, $passWord: String!, $userName: String!) {
  userLogin(isBarber: $isBarber, passWord: $passWord, userName: $userName) {
    user {
      id
      username
    }
    errors {
      ...RegularError
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  userLogout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: RegistrationInput!) {
  userRegister(options: $options) {
    user {
      id
      username
    }
    errors {
      ...RegularError
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};