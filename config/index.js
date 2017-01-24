/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var config = {
    local: {
        mode: 'local',
        host : 'localhost',
        port: 3000,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        },
        twitter :{
            consumerKey: 'wdaBHumoamxEdAjAmEc4KYo8N',
            consumerSecret: '6zu64D3Lg0EGPxnhyj5OxMuHX6wzQAFWW9US2xF8NYSqdcEfKx',
            callback: 'http://localhost:3000/twitter'
        }
    },
    staging: {
        mode: 'staging',
        host : 'tshirthustle.com',
        port: 4000,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        },
        twitter :{
            consumerKey: 'wdaBHumoamxEdAjAmEc4KYo8N',
            consumerSecret: '6zu64D3Lg0EGPxnhyj5OxMuHX6wzQAFWW9US2xF8NYSqdcEfKx',
            callback: 'http://tshirthustle.com/twitter'
        }
    },
    pro: {
        mode: 'pro',
        host : 'tshirthustle.com',
        port: 3000,
        shareSale :{
            myAffiliateID : '1014588',
            APIToken : '10ecldpyOJEVk1za',
            APISecretKey : 'ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i'
        },
        twitter :{
            consumerKey: 'wdaBHumoamxEdAjAmEc4KYo8N',
            consumerSecret: '6zu64D3Lg0EGPxnhyj5OxMuHX6wzQAFWW9US2xF8NYSqdcEfKx',
            callback: 'http://tshirthustle.com/twitter'
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


