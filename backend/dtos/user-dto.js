export default class userDto {
	username;
	email;
	id;
	isActivated;
	tasks;

	constructor(model) {
		this.username = model.username;
		this.email = model.email;
		this.id = model._id;
		this.tasks = model.tasks;
		this.isActivated = model.isActivated;
	}
}
