import { useState } from 'react';
import './App.css';

import Tasks from './components/Tasks.jsx'; // - The component.

const App = () => {
	// - An example of tasks:
	const [tasks, setTasks] = useState([
		{
			id: '1',
			title: 'Study.',
			completed: false,
		},
		{
			id: '2',
			title: 'Read a book.',
			completed: true,
		}
	])

	return (
		<>
			<div className='container'>
				<Tasks tasks={tasks}/>
			</div>
		</>
	)
}

export default App;
