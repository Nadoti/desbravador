


export type IDataContextUser = {
  dataUserDetails: IDataContextUserDetails | undefined, 
  setDataUserDetails: React.Dispatch<React.SetStateAction<IDataContextUserDetails | undefined>>;
  dataUserRepositories: IDataContextUserRepositories[];
  setDataUserRepositories: React.Dispatch<React.SetStateAction<IDataContextUserRepositories[]>>;
  sortRepositories: (growing: boolean, repositories: IDataContextUserRepositories[]) => void;
  isOrdinationRepositories: boolean;
}

export type IDataContextUserDetails = {
  "avatar_url": string,
  "email": string,
  "bio": string,
  "followers": number,
  "following": number,
}

export type IDataContextUserRepositories = {
  "id": number,
  "name": string,
  "full_name": string,
  "html_url": string,
  "description": string,
  "url": string,
  "stargazers_count": number,
  "created_at": string,
}