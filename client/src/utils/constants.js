var environment = process.env.NODE_ENV || 'development';

exports.base_path = '/app';
exports.serverUrl = environment === 'development' ?  'http://localhost:5000' : process.env.REACT_APP_DOMAIN;
exports.imageProps = {
    width: 400,
    height: 250
};