import { createContext } from "react";

export type AuthContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<undefined>>;
};

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  setLoading: () => {}, // 初期値として空の関数を提供
  isSignedIn: false,
  setIsSignedIn: () => {}, // 初期値として空の関数を提供
  currentUser: undefined,
  setCurrentUser: () => {}, // 初期値として空の関数を提供
});
