const fetch = require('node-fetch');

const request = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data) {
        return (data.name);
    },

    getAllFirstNames(data) {
        let firstNames = [];
        data.forEach(element => {
            firstNames.push(element.name);
        });
        return firstNames;
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        try {
            const response = await fetch(request.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await request.getUsers();
        await console.log(request.getFirstName(data));
        await console.log(request.getAllFirstNames(data));
    },

    async fetchUsers(url) {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    },


}
export default request;
