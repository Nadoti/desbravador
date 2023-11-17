import { Header } from "../components/Header"
import { User } from "../components/User"
import { UserRepository } from "../components/UserRepository"


export function Home() {
  

  return (
    <main>
      <Header />
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 items-start">
        <User />
        <UserRepository />
      </div>
    </main>
  )
}

