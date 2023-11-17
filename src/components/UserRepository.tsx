import { useDataUserContext } from "../context/UserContext"
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export function UserRepository() {
  const { dataUserRepositories, sortRepositories, isOrdinationRepositories } = useDataUserContext()
  
  return (
    <section className="w-full h-[500px] shadow-xl overflow-y-scroll rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 text-center pt-5 mb-2">Repositorios</h1>
      <div className="flex items-center justify-between px-4 mb-8">
        <button className={`py-1 px-4 rounded-xl text-xs border border-gray-400 disabled:cursor-not-allowed ${isOrdinationRepositories ? "bg-gray-400" : ""}`} onClick={() => sortRepositories(true,dataUserRepositories)} disabled={dataUserRepositories.length === 0 ? true : false}>Crescente</button>
        <button className={`py-1 px-4 rounded-xl text-xs border border-gray-400 disabled:cursor-not-allowed ${!isOrdinationRepositories ? "bg-gray-400" : ""}`} onClick={() => sortRepositories(false, dataUserRepositories)} disabled={dataUserRepositories.length === 0 ? true : false}>Decrescente</button>
      </div>
      <ul className="flex flex-col gap-10 px-4 pb-4">
        {dataUserRepositories?.map(repository => (
          <li
            className="flex flex-col gap-2 border px-2 pt-2 pb-4 rounded-xl border-gray-500"
            key={repository.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-600">Nome: <span className="text-sm font-normal">{repository.name}</span></h2>
              <p className="font-bold text-gray-600">Criado em: <span className="text-sm font-normal">{formatDate(repository.created_at)}</span></p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-gray-600">Estrelas: <span className="text-sm font-normal">{repository.stargazers_count}</span></p>
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="inline-block bg-green-700 w-fit py-1 px-4 text-white font-semibold rounded-md transition-all hover:scale-105"
                to={`repository/${repository.full_name}`}
              >
                Ver Detalhes
              </Link>
              <Link
                className="inline-block bg-gray-500 w-fit py-1 px-4 text-white font-semibold rounded-md transition-all hover:scale-105"
                to={repository.html_url}
                target="_blank"
              >
                Ir para o repositório
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}