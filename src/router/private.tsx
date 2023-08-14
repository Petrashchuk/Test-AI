import { Home, productsLoader, Product, productLoader, Preferences, About, Blog } from '../pages';

export const privateRouters = [
	{
		element: <Home />,
		loader: productsLoader,
		index: true
	},
	{
		element: <Product />,
		loader: productLoader,
		index: false,
		path: '/product/:id'
	},
	{
		element: <Preferences />,
		index: false,
		path: '/preferences'
	},
	{
		element: <About />,
		path: 'about',
		index: false
	}, {
		element: <Blog />,
		path: 'blog',
		index: false
	}
];
