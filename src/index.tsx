
/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import Home from './pages/Home'
import Shops from './pages/Shops'
import NotFound from './pages/Notfound'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Login from './pages/Login'

import './index.css'
import App from './App'
import Register from './pages/Register'


const root = document.getElementById('root')

render(() => (
	<Router root={App}>
		<Route path="/" component={Home} />
		<Route path="/shops" component={Shops} />
		<Route path="/categories" component={Categories} />
		<Route path="/contact" component={Contact} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="*" component={NotFound} />
	</Router>
), root!)
