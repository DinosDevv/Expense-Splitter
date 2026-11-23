import { createRoot } from 'react-dom/client'
import { HomePage } from './pages/HomePage'
import { Groups } from './pages/Groups'
import { Stats } from './pages/Stats'
import { Settings } from './pages/Settings'
import { SideNav } from './components/SideNav'

import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <SideNav />
    <Routes>
      <Route path="/groups/:groupName" element={<HomePage />} />
      <Route path="/" element={<Groups />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
)
