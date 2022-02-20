import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Button from './components/molecules/Button'
import RightFloatingOption from './components/organisms/RightFloatingOption'
import FixedBoxLayout from './components/templates/FixedBoxLayout'
import VerticalDashboardV1 from './components/templates/VerticalDashboardV1'
import BadgePage from './pages/components/BadgePage'
import ButtonPage from './pages/components/ButtonPage'
import FormPage from './pages/components/FormPage'
import SpinnerPage from './pages/components/SpinnerPage'
import TextFieldPage from './pages/components/TextFieldPage'
import ToastPage from './pages/components/ToastPage'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <button className="bg-rose-300 px-4 py-2" onClick={() => navigate('/')}>
      Go home 🤘
    </button>
  )
}
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="py-6 px-9">
      <Button autoFocus onClick={() => navigate('/components/button')}>
        Go to Button component page
      </Button>
    </div>
  )
}
const Help = () => <p>HELP page</p>
const ItemContainer = ({ val }: { val: string | number }) => (
  <>
    <p>ITEM CONTAINER page</p>
    <p className="text-lg font-medium text-blue-500">{val}</p>
    <Outlet />
  </>
)
const ItemDetail = () => <p>ITEM DETAIL page</p>
const ItemDetail2 = () => <p>ITEM DETAIL dua page</p>
const Login = () => <p>LOGIN page</p>
const Register = () => <p>REGISTER page</p>

const App = () => {
  return (
    <div className="text-sm">
      {console.time('App render')}
      <RightFloatingOption />

      <Routes>
        <Route path="/" element={<VerticalDashboardV1 />}>
          <Route index element={<Home />} />
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />

          <Route path="components" element={<FixedBoxLayout />}>
            <Route index element={<ItemContainer val="/components" />} />
            <Route path="text-field" element={<TextFieldPage />} />
            <Route path="alert" element={<ItemContainer val="alert Page" />} />
            <Route path="accordion" element={<ItemContainer val="accordion Page" />} />
            <Route path="badge" element={<BadgePage />} />
            <Route path="breadcrumb" element={<ItemContainer val="Breadcrumb Page" />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="card" element={<ItemContainer val="card Page" />} />
            <Route path="carousel" element={<ItemContainer val="carousel Page" />} />
            <Route path="dropdown" element={<ItemContainer val="dropdown Page" />} />
            <Route path="form" element={<FormPage />} />
            <Route path="typography" element={<ItemContainer val="typography Page" />} />
            <Route path="modal" element={<ItemContainer val="modal Page" />} />
            <Route path="tab" element={<ItemContainer val="tab Page" />} />
            <Route path="navbar" element={<ItemContainer val="navbar Page" />} />
            <Route path="footer" element={<ItemContainer val="footer Page" />} />
            <Route path="sidebar" element={<ItemContainer val="sidebar Page" />} />
            <Route path="pagination" element={<ItemContainer val="pagination Page" />} />
            <Route path="timeline" element={<ItemContainer val="timeline Page" />} />
            <Route path="progress-bar" element={<ItemContainer val="ProgressBar Page" />} />
            <Route path="table" element={<ItemContainer val="table Page" />} />
            <Route path="spinner" element={<SpinnerPage />} />
            <Route path="toast" element={<ToastPage />} />
            <Route path="tooltip" element={<ItemContainer val="Tooltip Page" />} />
          </Route>

          <Route path="items" element={<ItemContainer val="/items" />}>
            <Route path=":itemId" element={<ItemDetail />} />
            <Route path="dua" element={<ItemDetail2 />} />
          </Route>

          <Route path="menu_11" element={<ItemContainer val="menu_11" />}>
            <Route path="submenu_1" element={<ItemContainer val="submenu_1" />} />
            <Route path="submenu_2" element={<ItemContainer val="submenu_2" />} />
            <Route path="submenu_3" element={<ItemContainer val="submenu_3" />} />
          </Route>

          <Route path="menu_12" element={<ItemContainer val="menu_12" />} />
          <Route path="menu_13" element={<ItemContainer val="menu_13" />} />
          <Route path="menu_14" element={<ItemContainer val="menu_14" />} />

          <Route path="menu_15" element={<ItemContainer val="menu_15" />}>
            <Route path="submenu_1" element={<ItemContainer val="submenu_1" />} />
            <Route path="submenu_2" element={<ItemContainer val="submenu_2" />} />
            <Route path="submenu_3" element={<ItemContainer val="submenu_3" />} />
          </Route>

          <Route path="menu_21" element={<ItemContainer val="menu_21" />}>
            <Route path="submenu_1" element={<ItemContainer val="submenu_1" />} />
          </Route>
          <Route path="menu_22" element={<ItemContainer val="menu_22" />} />
          <Route path="menu_23" element={<ItemContainer val="menu_23" />} />
          <Route path="menu_24" element={<ItemContainer val="menu_24" />} />
        </Route>

        {/* component can be called like this, bcs she is just a normal function */}
        <Route
          path="*"
          element={
            <div className="min-h-screen w-screen">
              <div className="mb-2 w-fit">
                <Link to={'/'} className="rounded bg-blue-200 px-4 py-2">
                  Go home 🚀
                </Link>
              </div>
              <Outlet />
            </div>
          }
        >
          <Route path="*" element={NotFound()} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      {console.timeEnd('App render')}
    </div>
  )
}

export default App
