import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { СheckAuthUser } from './store/action-creator/currentUser';
import Tasks from './components/Tasks/Tasks';

const App: React.FC = () => {
	const dispatch = useDispatch();

	const { ChangeScroll } = useActions();
	const isLoginActive = useTypedSelector((state) => state.modals.login);

	const currentUser = useTypedSelector((state) => state.currentUser);

	const [currentLoginType, setCurrentLoginType] = useState('');

	const handleScroll = () => {
		const position: number = window.scrollY;
		ChangeScroll(position);
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(СheckAuthUser());
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{!currentUser.username ? (
				<div style={{ overflowY: isLoginActive ? 'hidden' : 'visible', height: isLoginActive ? '100vh' : 'fit-content' }}>
					<Header />
					<Home setCurrentLoginType={setCurrentLoginType} />
					<About />
					<Footer />
					{isLoginActive ? <Login setCurrentLoginType={setCurrentLoginType} currentLoginType={currentLoginType} /> : ''}
				</div>
			) : (
				<Tasks />
			)}
		</>
	);
};

export default App;
