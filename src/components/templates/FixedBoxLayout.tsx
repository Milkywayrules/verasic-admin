import { HomeIcon } from '@heroicons/react/outline'
import { NavLink, Outlet } from 'react-router-dom'

const FixedBoxLayout = () => {
  return (
    <div className="h-screen w-full overflow-auto bg-orange-700 p-1">
      <div className="flex h-full w-full flex-col  overflow-y-auto bg-white text-gray-700">
        {/* extract this into component to be used by multiple pages */}
        <div className="px-9 pt-6 pb-24">
          {/* breadcrumb later */}
          <p className="flex items-center gap-2 text-gray-500">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2  hover:text-gray-400 ${isActive ? 'underline' : ''}`
              }
            >
              <HomeIcon className="h-4 w-4" /> home
            </NavLink>
            /
            <NavLink to="/components" className={'hover:text-gray-400'}>
              components
            </NavLink>
            /
            <NavLink
              to="/components/button"
              className={({ isActive }) => `hover:text-gray-400 ${isActive ? 'underline' : ''}`}
            >
              button
            </NavLink>
          </p>

          {/* page title later */}
          <h1 className="mt-1 w-5/6 text-3xl font-bold text-gray-900 lg:w-1/2">
            Button Components - Verasic
          </h1>

          {/* page brief desc later */}
          <p className="mt-4">Use this button components across your entire website.</p>

          {/* page desc divider later */}
          <div className="my-8 h-px w-full shrink-0 bg-gray-300"></div>

          {/* page long desc later */}
          <div className="flex flex-col gap-2">
            <p>
              Button is the most widely used element in any user interface. It can be used to
              trigger an action, link to other pages, processing a form, and many more.
            </p>
            <p className="">
              Verasic provides a decent set of styles and sizes for the button component including
              transparent buttons, link buttons, multiple colors, sizes, buttons with icons, and
              many more. Verasic also provides button component for some state including loading,
              selected, and disabled. More components are soon available at Verasic.
            </p>
          </div>

          <div className="mt-10">
            <Outlet />
          </div>
        </div>

        {/* footer later */}
        <div className="flex w-full items-center justify-between bg-gray-100 py-20 px-9">
          <div className="">This is a temporary footer</div>
          <div className="">
            <span>Copyright 2022 - </span>
            <a
              href="https://github.com/Milkywayrules/verasic-admin"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 underline"
            >
              Verasic Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixedBoxLayout
