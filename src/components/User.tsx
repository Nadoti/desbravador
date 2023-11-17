import { useDataUserContext } from "../context/UserContext"
import avatar from "../assets/avatar.png"


export function User() {
  const { dataUserDetails } = useDataUserContext()
  return (
    <section className="w-full max-w-xs shadow-2xl rounded-xl mx-auto">
      <div className="w-full flex items-center justify-center ">
        <img 
          className="w-64 rounded-full relative -top-10"
          src={dataUserDetails?.avatar_url ? dataUserDetails?.avatar_url : avatar} 
          alt="Image Avatar" 
        />
      </div>
      <div className="flex flex-col gap-2 -mt-5 pb-5 pl-7 pr-4">
        <p className="text-base font-bold text-gray-700">Seguidores: <span className="text-sm font-normal text-gray-500">{dataUserDetails?.followers}</span></p>
        <p className="text-base font-bold text-gray-700">Seguindo: <span className="text-sm font-normal text-gray-500">{dataUserDetails?.following}</span></p>
        <p className="text-base font-bold text-gray-700">E-mail: <span className="text-sm font-normal text-gray-500">{dataUserDetails?.email}</span></p>
        <p className="text-base font-bold text-gray-700">Bio: <span className="text-sm font-normal text-gray-500">{dataUserDetails?.bio}</span></p>
      </div>
    </section>
  )
}
