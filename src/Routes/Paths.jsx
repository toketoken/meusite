/* import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Notfound = lazy(() => import('../pages/Notfound'));

const Paths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Paths; */

// --------------------------------------------------------------

/* import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const UserProfile = lazy(() => import('../pages/UserProfile')); // Novo componente para perfil de usuário

const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Michael Johnson', email: 'michael@example.com' }
  ]; */


/* const Paths = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="user/:id" element={<UserProfile />} /> {/* Rota com parâmetro dinâmico }*/
/*                     </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}; */

/* export default Paths; */

// ---------------------------------------------------------------------------------

/* import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';
import NotFound from '../pages/NotFound';

// Importação dos componentes de página usando lazy loading
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));

const UserProfile = lazy(() => import('../pages/UserProfile')); // Novo componente para perfil de usuário

// Lista de usuários de exemplo
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael@example.com' }
];

const Paths = () => {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="user/:id" element={<UserProfile users={users} />} /> {/* Rota com parâmetro dinâmico }
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  };
  
  export default Paths; */

  //-------------------------------------------

/*   import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';
import NotFound from '../pages/NotFound';
import Header from './Header'; // Supondo que o Header também seja configurado para receber os usuários

// Importação dos componentes de página usando lazy loading
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const UserProfile = lazy(() => import('../pages/UserProfile')); // Componente para perfil de usuário

// Lista de usuários de exemplo
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael@example.com' }
];

const Paths = () => {
  return (
    <BrowserRouter>
      <Header users={users} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:id" element={<UserProfile users={users} />} /> {/* Rota com parâmetro dinâmico }
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Paths; */

// -------------------------------------------------

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PageLayout from '../assets/layouts/PageLayouts';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import UsersPage from '../pages/UsersPage'; // Importe o componente UsersPage aqui

// Componentes de página usando lazy loading
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const UserProfile = lazy(() => import('../pages/UserProfile')); // Componente para perfil de usuário

// Lista de usuários de exemplo
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael@example.com' }
];

const Paths = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" element={<UsersPage users={users} />} /> {/* Rota para página de usuários */}
            <Route path="user/:id" element={<UserProfile users={users} />} /> {/* Rota com parâmetro dinâmico para perfil de usuário */}
          </Route>
          <Route>
            <Route path="*" element={<NotFound />} />
          </Route>
       </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Paths;