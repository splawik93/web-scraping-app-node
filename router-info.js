
const find = require('local-devices');


module.exports = { 
    findAllDevices: function(){
        find('192.168.0.1-192.168.0.250').then(devices => {
            console.log(devices) 
        
        })
          
    },
    test: function() {
        return "something"
    }


};