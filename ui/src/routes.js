import StrategyList from './StrategyList.jsx';
import CreateStrategy from './CreateStrategy.jsx';
import StrategyEdit from './StrategyEdit.jsx';
import StockList from './StockList.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/strategies/:id?', component: StrategyList },
  { path: '/strategyEdit/:id', component: StrategyEdit },
  { path: '/stocks/:id?', component: StockList },
  { path: '/create', component: CreateStrategy },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;
