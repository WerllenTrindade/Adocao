import React, { ReactNode } from 'react'
import { AuthProvider } from './Auth';
import { DogProvider } from './Dog';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps){
    return (
      <AuthProvider>
        <DogProvider>
            {children}
        </DogProvider>
    </AuthProvider>
    )
}

export { AppProvider }