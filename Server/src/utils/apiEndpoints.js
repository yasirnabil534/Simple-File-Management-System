const authAPI = {
    LOGIN: '/login',
    LOGOUT: '/logout',
};

const userAPI = {
    CREATE: '/create',
    ALL: '/get-all',
    USER_BY_ID: '/user/:id',
    DETAIL: '/dashboard-data',
    GET_LATEST: '/get-latest',
    SET_FILE: '/set-file',
};

const fileAPI = {
    CREATE: '/create',
    ALL: '/get-all',
    UPLOAD: '/upload',
    INSERT: '/insert',
}

module.exports = {
    authAPI,
    userAPI,
    fileAPI,
};