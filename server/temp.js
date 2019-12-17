// запрос авторизации
requestAuth = {
    action: 'userAuthorization',    // Route action
    username: 12345        
}

// ответ успешная авторизация
responseAuth = {
    action: 'userAuthorized',
    code: 200,           
    message: 'ok',       
    data: abcde        
}

// ответ неудачная авторизация
responseAuth = {
    action: 'userAuthorized',
    code: 404,           
    message: OK,      
}