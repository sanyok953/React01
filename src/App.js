import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	//console.log(props)
	return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/dialogs'
						render={ () => <DialogsContainer /> }
					/>
					<Route path='/profile/:userId?'
						render={ () => <ProfileContainer /> }
					/>
					<Route path='/users/:page?'
						render={ () => <UsersContainer /> }
					/>
				</div>
			</div>
	);
}

/* store={props.store.navBar} */

/* store={props.store} */

/* store={props.store} */

export default App;