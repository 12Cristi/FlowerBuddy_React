import { createBrowserRouter } from 'react-router';
import Layout from '../layouts/Layout';
import Buchete from '../views/Buchete/Buchete';
import Trandafiri from '../views/Trandafiri/Trandafiri';
import Aranjamente from '../views/Aranjamente/Aranjamente';
import Artificiale from '../views/Artificiale/Artificiale';
import Uscate from '../views/Uscate/Uscate'
import Interior from '../views/Interior/Interior'
import Evenimente from '../views/Evenimente/Evenimente'
import Ingrijire from '../views/Ingrijire/Ingrijire'
import Home from '../views/Home/Home';

let router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: Home },
      { path: '/buchete-flori', Component: Buchete },
      { path: '/trandafiri', Component: Trandafiri },
      { path: '/aranjamente-florale', Component: Aranjamente },
      { path: '/flori-artificiale', Component: Artificiale },
      { path: '/flori-uscate', Component: Uscate },
      { path: '/plante-interior', Component: Interior },
      { path: '/evenimente', Component: Evenimente },
      { path: '/ingrijire-plante', Component: Ingrijire },
    ],
  },
]);

export default router;