
/* @refresh reload */
import App from './App'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import { AuthContextProvider } from './context/AuthContext'

/* This style sheet includes Tailwindcss as well as custom css */
import './index.css'

/* This the public side page */
import Home from './pages/public/Home'
import Shops from './pages/public/Shops'
import NotFound from './pages/Notfound'
import Categories from './pages/public/Categories'
import Contact from './pages/public/Contact'
import Login from './pages/public/Login'
import Register from './pages/public/Register'
import Products from './pages/public/Products'
import Product from './pages/public/Product'

/* This is client side page */
import Profile from './pages/client/Profile'
import Orders from './pages/client/Orders'
import Account from './pages/client/Account'
import Notification from './pages/client/Notification'
import Favourite from './pages/client/Favourite'
import AdminLayout from './layouts/AdminLayout'


const root = document.getElementById('root')

render(() => (
	<AuthContextProvider>
		<Router root={App}>
			<Route path="/" component={Home} />
			<Route path="/shops" component={Shops} />
			<Route path="/shop/:id" component={Products} />
			<Route path="/product/:id" component={Product} />
			<Route path="/categories" component={Categories} />
			<Route path="/contact" component={Contact} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="*" component={NotFound} />
			<Route path="/" component={AdminLayout}>
				<Route path="/profile" component={Profile} />
				<Route path="/orders" component={Orders} />
				<Route path="/favourite" component={Favourite} />
				<Route path="/notification" component={Notification} />
				<Route path="/account" component={Account} />
			</Route>
		</Router>
	</AuthContextProvider>
), root!)
