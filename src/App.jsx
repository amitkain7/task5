import { Navbar, Dashboard, Sidebar } from './index'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className='flex flex-col overflow-hidden h-screen'>
      <Navbar />
      <div className='flex overflow-hidden h-screen w-full'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
