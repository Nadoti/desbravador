import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getUserRepositoryDatails } from "../services/api"
import { UserRepositoryDetails } from "../types/user-repository-details-types"
import { errorNotification, notification } from "../utils/notification"


export function Repository() {
  const {nameId, id} = useParams()
  const [dataRepository, setDataRepository] = useState<UserRepositoryDetails>()
  const navigate = useNavigate();


  useEffect(() => {
    async function getRepository() {
      const repository = await getUserRepositoryDatails(`${nameId}/${id}`)
      if(repository.status !== 200) {
        notification({type: errorNotification, message: "Projeto não encontrado!, redirecionando para a home"})
        setTimeout((() => {
          navigate("/")
        }), 5000)
        return;
      }
      setDataRepository(repository.data)
    }
    getRepository()
  }, [])

  return (
    <main className="w-full h-screen flex items-center justify-center px-2">
      <div className="w-full max-w-lg flex flex-col gap-4 py-5 px-6 shadow-xl">
      <Link
          className="w-fit text-gray-400 border border-gray-300 p-3 rounded-full"
          to="/"
        >
          {"<- voltar"}
        </Link>
        <h1 className="text-2xl">Projeto: <span className="text-2xl font-bold text-green-700 sm:text-3xl">{dataRepository?.full_name}</span></h1>
        <p className="font-bold text-gray-600">Nome: <span className="text-sm font-normal">{dataRepository?.name}</span></p>
        <p className="font-bold text-gray-600">Descrição: <span className="text-sm font-normal">{dataRepository?.description}</span></p>
        <p className="font-bold text-gray-600">Estrelas: <span className="text-sm font-normal">{dataRepository?.stargazers_count}</span></p>
        <p className="font-bold text-gray-600">Linguagem: <span className="text-sm font-normal">{dataRepository?.language}</span></p>
        <Link
          className="inline-block bg-gray-500 w-fit py-1 px-4 text-white font-semibold rounded-md transition-all hover:scale-105"
          to={dataRepository?.html_url as string}
          target="_blank"
        >
          Ir para o repositório
        </Link>
      </div>
    </main>
  )
}