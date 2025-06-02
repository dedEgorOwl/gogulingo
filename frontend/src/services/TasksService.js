import $api from '../http';

export default class TaskService {
	static async fetchListeningTasks() {
		return $api.get('/listeningTasks');
	}

	static async fetchTranslateTasks() {
		return $api.get('/translateTasks');
	}

	static async fetchPutTogetherTasks() {
		return $api.get('/putTogetherTasks');
	}
}
