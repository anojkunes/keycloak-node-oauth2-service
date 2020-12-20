exports.getAnonymous = (req, res) => {
    res.send("Hello Anonymous");
}

exports.getUser = (req, res) => {
    // console.log(req.kauth.grant.access_token.content)
    res.send("Hello User");
}

exports.getAdmin = (req, res) => {
    res.send("Hello Admin");
}

exports.getAllUser = (req, res) => {
    res.send("Hello All User");
}