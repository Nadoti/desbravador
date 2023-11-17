import { useState } from "react"
import { getUser, getUserRepository } from "../services/api"
import { useDataUserContext } from "../context/UserContext"
import { errorNotification, notification } from "../utils/notification"



export function Header() {
  const [username, setUsername] = useState("")
  const { setDataUserDetails, sortRepositories } = useDataUserContext()

  async function searchUser() {
    const user = await getUser(username)
    if(user.status !== 200 ) {
      notification({type: errorNotification, message: "Usuário não encontrado!"})
      return;
    }
    const repositories = await getUserRepository(username)
    sortRepositories(false, repositories.data)
    setDataUserDetails(user.data)
  }

  return (
    <header className="w-full py-4 px-2 shadow-xl flex items-center justify-center gap-4 mb-24">
      <input 
        type="text" 
        className="w-full max-w-xs py-1 px-2 border-2 border-gray-400 placeholder:text-gray-400 rounded-lg outline-none focus:border-green-700"
        placeholder="Informe o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="py-1 border-2 border-green-700 text-green-700 px-8 rounded-lg text-base font-bold transition-all hover:text-white hover:bg-green-700"
        onClick={searchUser}
      >
        Buscar
      </button>
    </header>
  )
}