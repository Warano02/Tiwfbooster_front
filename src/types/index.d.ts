export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}