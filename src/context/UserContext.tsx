import { PropsWithChildren, createContext, useContext, useState } from "react";
import { IDataContextUser, IDataContextUserDetails, IDataContextUserRepositories } from "../types/context-user-types";



const UserContext = createContext<IDataContextUser | null>(null);

export const useDataUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useDataUserContext precisa estar em DataContextProvider");
  return context;
};

export function UserContextProvider({ children }: PropsWithChildren) {
  const [ dataUserDetails, setDataUserDetails ] = useState<IDataContextUserDetails | undefined>()
  const [ dataUserRepositories, setDataUserRepositories ] = useState<IDataContextUserRepositories[]>([])
  const [ isOrdinationRepositories, setIsOrdinationRepositories] = useState(false)


  function sortRepositories(growing: boolean, repositories: IDataContextUserRepositories[]) {
    setIsOrdinationRepositories(growing)
    const ordination = growing ? 1 : -1;

    const orderedRepositories = [...repositories].sort((a, b) => {
      return ordination * (a.stargazers_count - b.stargazers_count);
    });

    setDataUserRepositories(orderedRepositories);
  }
  
  return (
    <UserContext.Provider
      value={{
        dataUserDetails,
        setDataUserDetails,
        dataUserRepositories, 
        setDataUserRepositories,
        sortRepositories,
        isOrdinationRepositories
      }}
    >
      {children}
    </UserContext.Provider>
  )
}