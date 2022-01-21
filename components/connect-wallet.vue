<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-header">
             <span>Connect to a wallet</span>
                <svg style="cursor:pointer;" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dkPtRN eoNyNE"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div class="info">
               <small> By connecting a wallet, you agree to GnosisDAO's <nuxt-link to="/"> Terms & Conditions </nuxt-link> and acknowledge that you have read, understood, and agree to them.</small>
            </div>
            <div @click="$store.commit('modals/addToken',true);$emit('close')" class="suggest">
                <h5>Install metamask</h5>
                <img src="https://cowswap.exchange/static/media/metamask.02e3ec27.png" alt="">
            </div>
             <div @click="$store.commit('modals/addToken',true);$emit('close')" class="suggest">
                <h5>Install metamask</h5>
                <img src="https://cowswap.exchange/static/media/walletConnectIcon.304e3277.svg" alt="">
            </div>
            <div  class="help">
            <small>New to decentralised applications?</small><br>
            <small><nuxt-link to="/">Learn more about wallets</nuxt-link></small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
    })
}
</script>


<style lang="scss" scoped>
a{
color: rgb(255, 120, 74);
}
.modal-container{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal{
    background: rgb(213, 233, 240);
    width: 40%;
    background-color: rgb(213, 233, 240);
    border: 1px solid rgb(213, 233, 240);
    box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
    width: 50vw;
    max-width: 420px;
    border-radius: 20px;
    padding: 20px;
    &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info{
        border: 1px solid rgb(255, 255, 255);
        background-color: rgb(213, 233, 240);
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
    }
    .help{
       text-align: center;
       margin-top: 20px;
    }
    .suggest{
        background-color: rgb(190, 221, 232);
        width: 100%;
        height: 60px;
        margin-top: 20px;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        img{
            width: 24px;
            height: 24px;
        }
        h5{
            font-weight: 500;
            font-style: 18px;
        }
        &:hover{
            border: 1px solid rgb(255, 120, 74);;
        }
    }
    
}

@media (max-width:700px) {
    .modal{
        width: 100%;
        height: 100vh;
        border-radius: 0;
        max-width: 100%;
        max-height: 100vh;
    }
}
</style>