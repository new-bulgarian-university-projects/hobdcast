exports.base_path = '/app';
exports.serverUrl = process.env.NODE_ENV === 'develpoment' ? process.env.REACT_APP_DOMAIN  : 'http://localhost:5000';
exports.imageProps = {
    width: 400,
    height: 250
};