import { AuthContext, AuthContextType } from "@/context/context";

type Props = {
  value: AuthContextType;
  children: React.ReactNode;
};

const AuthProvider = ({ value, children }: Props) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
