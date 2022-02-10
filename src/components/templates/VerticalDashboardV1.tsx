import { Outlet } from 'react-router-dom'
import VerticalSidebarV1 from '../organisms/verticalSidebarV1/VerticalSidebarV1'

const VerticalDashboardV1 = () => {
  return (
    <div className="flex min-h-screen w-full bg-white text-white">
      <VerticalSidebarV1 />

      <div className="w-full bg-white p-5 text-gray-700 shadow-md">
        <Outlet />
      </div>
    </div>
  )
}

export default VerticalDashboardV1
