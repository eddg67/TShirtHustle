/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    local: {
        mode: 'local',
        port: 3000
    },
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'production',
        port: 5000
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}


