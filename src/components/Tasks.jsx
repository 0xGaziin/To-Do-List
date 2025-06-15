import React from 'react';
import Task from './Task.jsx';

const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((tasks) => {
					return (
						<Task task={tasks}/>
					)
			})}
		</>
	)
};

export default Tasks;