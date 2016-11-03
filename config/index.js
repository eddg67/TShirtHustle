/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    local: {
        mode: 'local',
        port: 3000,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        }
    },
    staging: {
        mode: 'staging',
        port: 4000,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        }
    },
    production: {
        mode: 'production',
        port: 80,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        }
    },
    admin: {
        mode: 'admin',
        port:3001
    }
}

module.exports = function(mode) {
     return config[mode || process.argv[2] || 'local'] || config.local;
}


