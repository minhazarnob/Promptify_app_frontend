
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import { AppSidebar } from "./AppSideBar"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
     <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen flex flex-col">
        <SidebarTrigger />
        {<Outlet/>}
      </main>
    </SidebarProvider>
  )
}

export default MainLayout
