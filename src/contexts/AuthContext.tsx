import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'personnel';
  avatar?: string;
  phone?: string;
  status?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  selectRole: (role: 'admin' | 'client' | 'personnel') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate different user roles based on email
    let role: 'admin' | 'client' | 'personnel' = 'client';
    if (email.includes('admin')) role = 'admin';
    else if (email.includes('personnel') || email.includes('staff')) role = 'personnel';

    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      status: 'active'
    };

    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const register = async (name: string, email: string, password: string, role: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock registration
  };

  const verifyOTP = async (otp: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock OTP verification
  };

  const selectRole = (role: 'admin' | 'client' | 'personnel') => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, verifyOTP, selectRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
