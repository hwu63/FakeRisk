import StrategyList from './StrategyList.jsx';
import StockList from './StockList.jsx';
import IssueReport from './IssueReport.jsx';
import StrategyEdit from './StrategyEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';


const routes = [
	{ path: '/strategies/:id?', component: StrategyList },
	{ path: '/edit/:id', component: StrategyEdit },
	{ path: '/report', component: IssueReport },
	{ path: '/about', component: About },
	{ path: '/stocks/:id?', component: StockList },
	{ path: '*', component: NotFound },
];


export default routes;