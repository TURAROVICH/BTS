export const state = () => ({
    tokens:JSON.parse(`{
       "1":{
        "name":"ETC",
        "fullname":"ETHEREUM",
        "price":"38780",
        "img":"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" 
       }, "2":{
         "name":"DAI",
         "fullname":"DAI",
         "price":"100",
         "img":"https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" 
        }, "3":{
         "name":"USDC",
         "fullname":"USDC",
         "price":"10",
         "img":"https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" 
        }, "4":{
         "name":"USDT",
         "fullname":"USDT",
         "price":"1",
         "img":"https://s2.coinmarketcap.com/static/img/coins/200x200/825.png" 
        }, "5":{
         "name":"WBTC",
         "fullname":"WBTC",
         "price":"100",
         "img":"https://s2.coinmarketcap.com/static/img/coins/200x200/3717.png" 
        }, "6":{
         "name":"WETH",
         "fullname":"WETH",
         "price":"38780",
         "img":"https://app.intotheblock.com/static-assets/coins/eth.png" 
        }, "7":{
         "name":"1INCH",
         "fullname":"1INCH",
         "price":"10",
         "img":"https://www.pngall.com/wp-content/uploads/10/1inch-Crypto-Logo-PNG-Image.png" 
        }, "8":{
         "name":"AAVE",
         "fullname":"AAVE",
         "price":"3880",
         "img":"https://cryptologos.cc/logos/aave-aave-logo.png" 
        }, "9":{
            "name":"AMP",
            "fullname":"AMP",
            "price":"780",
            "img":"https://cryptologos.cc/logos/amp-amp-logo.png" 
        }, "10":{
            "name":"ANT",
            "fullname":"Aragon Network Token",
            "price":"38 780",
            "img":"https://s2.coinmarketcap.com/static/img/coins/200x200/1680.png" 
        }, "11":{
            "name":"BAL",
            "fullname":"Balancer",
            "price":"780",
            "img":"https://cryptologos.cc/logos/balancer-bal-logo.png" 
        }, "12":{
            "name":"BAND",
            "fullname":"Band Protocol",
            "price":"380",
            "img":"https://cryptologos.cc/logos/band-protocol-band-logo.png" 
        }, "13":{
            "name":"MANA",
            "fullname":"Decentraland",
            "price":"3880",
            "img":"https://cryptologos.cc/logos/decentraland-mana-logo.png" 
        }, "14":{
            "name":"SAND",
            "fullname":"Sandbox",
            "price":"38780",
            "img":"https://cryptologos.cc/logos/the-sandbox-sand-logo.png" 
        }, "15":{
            "name":"MKR",
            "fullname":"MKR",
            "price":"80",
            "img":"https://cryptologos.cc/logos/maker-mkr-logo.png" 
        } 
     }`),
     firstToken:null,
     secondToken:null
})


export const mutations = {
    setFirstToken(state,i){
        state.firstToken = i
    },
    setSecondToken(state,i){
        state.secondToken = i
    }
}