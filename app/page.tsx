// import Login from "./login"
import { Index } from "@/app/pages/index"
import { CustomNavigationBar } from "@/components/main-nav"

export default function Home() {
  return (
    <div className="w-full h-full">
      <CustomNavigationBar />
      {/* <Login /> */}
      <Index />
    </div>
  )
}