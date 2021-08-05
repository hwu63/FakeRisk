import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';


const routes = [
	{ path: '/strategies/:id?', component: IssueList },
	{ path: '/edit/:id', component: IssueEdit },
	{ path: '/create', component: IssueReport },
	{ path: '/about', component: About },
	{ path: '/stocks/:id?', component: IssueList },
	{ path: '*', component: NotFound },
];


export default routes;