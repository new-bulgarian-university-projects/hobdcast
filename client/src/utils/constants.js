exports.base_path = '/app';
exports.serverUrl = process.env.NODE_ENV === 'development' ?  'http://localhost:5000' : process.env.REACT_APP_DOMAIN;
exports.imageProps = {
    width: 400,
    height: 250
};