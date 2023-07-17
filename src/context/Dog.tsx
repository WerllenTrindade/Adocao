import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { DB_USER } from '../dtos/typagem';


export interface DogsProps{
  id: number
  idade: number
  nome: string
  peso: number
  raca: string
  porte: string
  sobre: string
  personalidade: string
  sexo: string
  image?: string
  message?: string
}

interface DogContextData {
  dogDetails: DogsProps;
  setDogDetails: React.Dispatch<React.SetStateAction<DogsProps>>;
}

interface DogProviderProps {
  children: ReactNode;
}

export const DogContext = createContext<DogContextData>(
  {} as DogContextData
);


const DogProvider = ({ children }: DogProviderProps) => {
  const [dogDetails, setDogDetails] = useState({} as DogsProps)

  return (
    <DogContext.Provider
      value={{
        dogDetails,
        setDogDetails
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

function useDog(): DogContextData {
  const context = useContext(DogContext);

  return context;
}

export { DogProvider, useDog };
