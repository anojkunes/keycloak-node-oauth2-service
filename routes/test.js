const express = require('express');
const keycloak = require("../config/keycloak").getKeycloak();
const router = express.Router();

const {
    getAdmin,
    getAllUser,
    getAnonymous,
    getUser
} = require("../controller/test")

router.get('/anonymous', getAnonymous)
.get("/user", keycloak.protect("qrp-booking-service-test:DELETE"), getUser)
.get("/admin", keycloak.protect(), getAdmin)
.get("/all-user", keycloak.protect(), getAllUser)

module.exports = router;