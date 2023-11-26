import { createContext } from "react";

// export const AuthContext = createContext("");

export type AuthContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  setLoading: () => {}, // 初期値として空の関数を提供
  isSignedIn: false,
  setIsSignedIn: () => {}, // 初期値として空の関数を提供
  currentUser: "",
  setCurrentUser: () => {}, // 初期値として空の関数を提供
});
