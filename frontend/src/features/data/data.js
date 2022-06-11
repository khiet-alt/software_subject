const API = {
    ORIGIN: 'http://localhost:5000/',
    // API_USER_LOCAL: 'http://localhost:5000/api/users/'
}

if (process.env.NODE_ENV === 'production'){
    API.ORIGIN = ''
}

exports.API = API