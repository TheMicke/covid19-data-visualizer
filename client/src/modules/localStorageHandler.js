const lsh = {
    set: function (variable, value, timeToLive) {
        const data = {value: value, expires_at: new Date().getTime() + timeToLive / 1};
        localStorage.setItem(variable.toString(), JSON.stringify(data));
    },
    get: function (variable) {
        const data = JSON.parse(localStorage.getItem(variable.toString()));
        if (data !== null) {
            if (data.expires_at !== null && data.expires_at < new Date().getTime()) {
                localStorage.removeItem(variable.toString());
            } else {
                return data.value;
            }
        }
        return null;
    },
    getExpireDate: function (variable) {
        const data = JSON.parse(localStorage.getItem(variable.toString()));
        data !== null ? data.expires_at : null;
    },
    delete: function (variable) {
        localStorage.removeItem(variable);
        return true;
    }
};

module.exports = lsh;