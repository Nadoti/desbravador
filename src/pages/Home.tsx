import { Header } from "../components/Header"
import { User } from "../components/User"
import { UserRepository } from "../components/UserRepository"


export function Home() {
  

  return (
    <main>
      <Header />
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-10 pb-10 items-start md:grid md:grid-cols-2">
        <User />
        <UserRepository />
      </div>
    </main>
  )
}

