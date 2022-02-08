import { Outlet, Route, Routes } from 'react-router-dom'
import RightFloatingOption from './components/organisms/RightFloatingOption'
import DashboardBitbucketLayout from './components/templates/DashboardBitbucketLayout'

const App = () => {
  return (
    <>
      <RightFloatingOption />

      <Routes>
        <Route path="/" element={<DashboardBitbucketLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="items" element={<ItemContainer />}>
            <Route path=":itemId" element={<ItemDetail />} />
            <Route path="dua" element={<ItemDetail2 />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

const Home = () => <p>HOME page</p>
const Help = () => <p>HELP page</p>
const ItemContainer = () => (
  <>
    <p>ITEM CONTAINER page</p>
    <Outlet />
  </>
)
const ItemDetail = () => <p>ITEM DETAIL page</p>
const ItemDetail2 = () => <p>ITEM DETAIL dua page</p>
const Login = () => <p>LOGIN page</p>
const Register = () => <p>REGISTER page</p>
