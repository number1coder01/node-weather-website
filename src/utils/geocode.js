const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.positionstack.com/v1/forward?access_key=0e61a7e7b1bc2365d866770c22fdaa77&query=' + encodeURIComponent(address);

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (!body || !body.data || body.data.length === 0) {
            callback('Unable to find location .', undefined);
        } else {
            const locationData = body.data[0]; // Get the first result
            callback(undefined, {
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                location: locationData.label
            });
        }
    });
};

module.exports = geoCode


