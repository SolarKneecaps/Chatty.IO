const moment = require('moment')
let msg;

const formatMsg = ({user, text})=>{
    msg = {user, text, time: moment().format("h:mm:ss a")}
    return msg;
}

module.exports = formatMsg;