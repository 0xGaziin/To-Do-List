import React from 'react';

import Button from './Button.jsx'
import './styles/AddTask.css'

const AddTask = () => {
  return (
		<>
			<div className='add-task-container'>
				<input className="add-task-input" type="text" />
				<div className="add-task-button">
					<Button>Adicionar</Button>
				</div>
			</div>
		</>
  );
}
 
export default AddTask;