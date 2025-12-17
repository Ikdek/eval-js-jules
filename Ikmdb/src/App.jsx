import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import ItemsList from './pages/ItemsList/ItemsList'
import Items from './pages/Items/Items'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items">
          <Route index element={<ItemsList />} />
          <Route path=":id" element={<Items />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}