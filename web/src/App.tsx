import { ClientList } from './pages/ClientList';
import { Detail } from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-full bg-gray-200">
      <div className="py-16 px-4 mx-auto max-w-screen-md sm:py-24 sm:px-6 lg:px-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientList />}>
              <Route index element={<ClientList />} />
            </Route>
            <Route path="detail" element={<Detail />}>
              <Route path=":name" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
