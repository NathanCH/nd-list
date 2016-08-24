import Request from 'superagent';

class Store {
	get(callback) {
		this.request()
			.then(response => {
				callback(response.body);
			})
			.catch(() => {
				throw new Error('Could not make request.');
			});
	}
	request() {
		return new Promise((resolve, reject) => {
			Request
				.get('data/wine.json')
				.end((error, response) => {
					if(error !== null) {
						reject();
					}

					resolve(response);
				});
		});
	}
}

export default Store;