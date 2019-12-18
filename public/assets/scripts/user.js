const User = (() => {

    let _self = {
        username: 'Guest',
        isAuthorized: false,
        clientId: 0,
    }

    let set = (user) => {
        _self.username = user.username;
        _self.isAuthorized = user.true;
        console.log('userAuthorized success');
    }    
    
    let setClientId = (clientId) => {
        _self.clientId = clientId;
        console.log('User.setClientId',  _self.clientId);
    }    
    
    let getClientId = () => {
        return _self.clientId;
    };
    
    let getUsername = () => {
        return _self.username;
    };

    return Object.freeze({
        set,
        setClientId,
        getClientId,
        getUsername
    })
})();

export default User;