export default class User {
    constructor() {
        this.clientId = 0;
        this.username = 'Guest';
        this.isAuthorized = false;
    }

    init(user) {
        this.username = user.username;
        this.isAuthorized = user.true;
        console.log('User authorized success');
    }   

    
    /**
     * Get user's client id
     * @returns {Number}
     */
    getClientId() {
        return this.clientId;
    }    

    /**
     * Set user's client id
     * @param {Number} value 
     */
    setClientId(value) {
        this.clientId = value;
        console.log(`User set client id  ${this.clientId}`);
    }

    /**
     * Get username
     * @returns {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Set username
     * @param {String} username 
     */
    setUsername(value) {
        this.username = value;
    }
}
