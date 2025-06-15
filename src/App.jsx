import { useState } from 'react';
import './App.css';

import Tasks from './components/Tasks.jsx'; // - The component.
import AddTask from './components/AddTask.jsx';

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
	]);

	return (
		<>
			<div className='container'>
				<AddTask />
				<Tasks tasks={tasks}/>
			</div>
		</>
	)
}

export default App;
