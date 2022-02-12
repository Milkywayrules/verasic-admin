import { Outlet } from 'react-router-dom'
import VerticalSidebarV1 from '../organisms/verticalSidebarV1/VerticalSidebarV1'

const VerticalDashboardV1 = () => {
  return (
    <div className="flex h-screen w-full bg-rose-200 text-indigo-600">
      <VerticalSidebarV1 />

      <Outlet />
    </div>
  )
}

export default VerticalDashboardV1
