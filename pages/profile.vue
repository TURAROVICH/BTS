<template>
    <div class="profile-container">
        <h3 style="margin-bottom:7px">Profile overview</h3>
        <div class="referal-url">
            <strong>Your referal url</strong>
            <span>-</span>
        </div>
        <div class="info">
            <div>
                <strong>Trades </strong>
                <div class="info-container">
                    <div>
                        <span>-</span>
                        <span class="span-desc">Total trades</span>
                    </div>
                    <div>
                        <span>-</span>
                        <span class="span-desc">Total traded volume</span>
                    </div>
                </div>
            </div>
            <div>
                <strong>Referrals  </strong>
                <div  class="info-container">
                    <div>
                        <span>-</span>
                        <span class="span-desc">Total referrals</span>
                    </div>
                    <div>
                        <span>-</span>
                        <span class="span-desc">Referrals volume</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button @click="showResult=true;$store.commit('modals/toggle',true)" class="button-wallet"><strong>Connect to a wallet </strong></button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.profile-container{
    width: 70%;
    margin: 50px auto;
    padding: 20px;
    background: rgba(213, 233, 240, 0.5);
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    max-height: 90vh;
    padding: 20px ;
}
h3{
    font-size: 26px;
    font-weight: 900;
}
.referal-url{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 21px;
    padding: 20px;
    box-shadow: rgb(255 255 255) 2px -2px 4px inset, rgb(162 200 216) -2px 2px 4px inset;
    background-color: rgb(206, 231, 239);
}
.info{
    display: flex;
    margin-top: 20px;
    gap: 20px;
    & > div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        -webkit-box-flex: 1;
        flex-grow: 1;
        gap: 20px;
        border-radius: 21px;
        padding: 20px;
        box-shadow: rgb(255 255 255) 2px -2px 4px inset, rgb(162 200 216) -2px 2px 4px inset;
        background-color: rgb(206, 231, 239);
        .info-container{
             display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack:  space-between;
            justify-content: space-between;
            gap: 90px;
            > div{
                flex-direction: column;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
            }
        }
    }
}
.button-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

@media (max-width:850px) {
    .profile-container{
        width: 90%;
    }
}
@media (max-width:570px) {
    .profile-container{
        margin: 0;
        width: 100%;
    }
    .info{
        flex-direction: column;
    }
}
</style>