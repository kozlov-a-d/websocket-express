const User = (() => {

    let _self = {
        username: 'Guest',
        isAuthorized: false
    }

    let set = (user) => {
        _self.username = user.username;
        _self.isAuthorized = user.true;
        console.log('userAuthorized success');
    }

    return Object.freeze({
        set,
    })
})();

export default User;