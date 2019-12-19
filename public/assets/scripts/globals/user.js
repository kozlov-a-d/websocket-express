const User = (() => {

    let _self = {
        username: 'Guest',
        isAuthorized: false,
        clientId: 0,
    }

    let set = (user) => {
        _self.username = user.username;
        _self.isAuthorized = user.true;
        console.log('User authorized success');
    }    

    /**
     * Set/get client id
     * @param {NUmber} clientId 
     */
    const clientId = (clientId) => {
        if (clientId) {
            _self.clientId = clientId;
            console.log(`User set client id  ${_self.clientId}`);
        } else {
            return _self.clientId;
        }
    }
    
    /**
     * Set/get username
     * @param {String} username 
     */
    let username = (username) => {
        if (username) {
            _self.username = username;
        } else {
            return _self.username;
        }
        
    };

    return Object.freeze({
        set,
        clientId,
        username
    })
})();

export default User;