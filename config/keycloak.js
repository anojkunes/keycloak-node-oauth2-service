var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

const keycloakConfig = {
    clientId: 'qrp-booking-service-test',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'SDIEP',
    credentials: {
        secret: '5815866d-961c-4a86-8501-db428f51c322'
    }
};

const initKeycloak = () => {
    var memoryStore = new session.MemoryStore();
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return {_keycloak, memoryStore};
    } else {
        console.log("Initializing Keycloak...");        
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return {_keycloak, memoryStore};
    }
}

const getKeycloak = () => {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};