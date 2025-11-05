import type { IUser } from './User';
import type { TaskStatus } from '../enums/Status';

export interface ITask {
	task_Id: string;
	name: string;
	owner: IUser;
	status: TaskStatus;
	description: string;
	epic: ITask['task_Id'];
	story_point: number;
	subtasks: [ITask];
}
