var utils = {};

utils.getCurrentDatetime = () => {
    return new Date().toISOString();
};

module.exports = utils;