import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

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

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [... tasks,
		{
			title: taskTitle,
			id: uuidv4(),
			completed: false,
		}
		];

		setTasks(newTasks);
	};

	return (
		<>
			<div className='container'>
				<AddTask handleTaskAddition={handleTaskAddition}/>
				<Tasks tasks={tasks}/>
			</div>
		</>
	)
}

export default App;
