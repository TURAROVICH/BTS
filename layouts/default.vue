<template>
    <div class="root">
        <div :class="{'filter':filter}">
        <div class="header">
            <div class="logo-container">
                <div @click="$router.push('/')" class="logo">
                <img src="https://azwidget.azureedge.net/logo/de9b78fc-8cb0-42aa-75ea-08d8ea57de57/a75f352b-fd69-41ff-a739-301bd9faad12.png" alt="" style="height: 50px; width: 100%; object-fit: contain;">
                <strong style="font-family: 'Mochiy Pop P One', sans-serif;font-size:20px;color:#2E4053;"> BTS </strong>
                </div>
                <div class="links">
                <nuxt-link to="/">Swap</nuxt-link>
                <nuxt-link to="/profile">Profile</nuxt-link>
                </div>
            </div>
            <div></div>
            <div class="menu">
                <div @click="tooltipToggle = !tooltipToggle" class="token">
                    <div class="token-wrapper">
                        <img src="https://cowswap.exchange/static/media/network-mainnet-logo.62251045.svg" alt="">
                        <span>Ethereum</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-fbWUsZ galITk"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    <div v-if="tooltipToggle" class="token-tooltip">
                        <div v-for="(i,k) in Object.values($store.state.tokens.tokens).slice(0,3)" :key="k" @click="tooltipToggle = false;$store.commit('modals/toggle',true)" class="item">
                            <img :src="i.img" alt="">
                            <span>{{i.fullname}}</span>
                            <div class="dot"></div>
                        </div>
                    </div>
                </div>
                <div @click="$store.commit('modals/toggle',true)"  class="select-token-btn1">
                    Connect to a wallet
                </div>
                <button @click="toggleMenu = true" class="menu-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-iukxot duDCEZ"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>


            </div>
        </div>       
        <Nuxt style="z-index:2" />
        </div>
        <menus v-if="toggleMenu" @close="toggleMenu = false" />
        <connect-wallet v-if="connectWallet" @close="$store.commit('modals/toggle',false)" />
        <add-token v-if="addToken" @close="$store.commit('modals/addToken',false)"/>
    </div>
</template>

<script>
export default {
    data:()=>({
        tooltipToggle:false,
        toggleMenu:false
    }),
    computed:{
        filter(){
            return this.$route.path === '/' ? false : true
        },
        connectWallet(){
            return this.$store.state.modals.toggleConnect
        },
        addToken(){
            return this.$store.state.modals.addToken
        }
    },
}
</script>


<style lang="scss" scoped>
.root{
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url(@/assets/bg2.svg) no-repeat,#A3D0FF;
    background-size: 100% 150%;
    padding: 0px 0 100px 0;
    background-attachment: fixed;
    overflow:hidden;
    background-position: center -100px;
    > div {
        overflow-y:scroll;
    }
    
}
.filter{
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100vh;
}
.header{
  display: flex;
  justify-content: space-between;
  flex: 1 .5 1;
  padding: 20px;
  background: transparent;
  .token{
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      &-tooltip{
          position: absolute;
          background: #000;
          z-index: 80;
          top: 50px;
          background-color: rgb(213, 233, 240);
          box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
          border-radius: 12px;
          border: 1px solid #fff;
          min-width: 175px;
          max-width: 175px;
          left: 0;
          display: flex;
          flex-direction: column;
          padding: 5px 10px;
          .item{
            display: grid;
            grid-template-columns: 1fr 5fr 1fr;
            align-items: center;
            padding: 5px 10px;
            grid-gap: 5px;
            border-radius: 10px;
              &:hover{
                  background: #fff;
              }
              img{
                  width: 15px;
                  height: 15px;
              }
              .dot{
                justify-self: end;
                background-color: rgb(167, 167, 167);
                border-radius: 50%;
                height: 9px;
                width: 9px;
              }
          }
      }
      &-wrapper{
          display: flex;
          align-items: center;
          gap: 10px;
          img{
              width: 15px;
              height: 15px;
          }
          span{
              font-size: 14px;
          }
        @media (max-width:500px) {
            span{
                display: none;
            }
        }
      }
      svg{
          width: 12px;
          height: 12px;
      }

  }
  .menu{
      margin-top: 10px;
      display: flex;
      gap: 10px;
      &-button{
            width: 100%;
            border: none;
            margin: 0px;
            height: 35px;
            background-color: rgb(213, 232, 240);
            padding: 0.15rem 0.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            &:hover{
                background: rgba(255,255,255,.9)
            }
      }
  }
  .logo-container{
    // width: 30%;
    display: flex;
    align-items: center;
    gap: 30px;
    .logo{
      display: flex;
      align-items: center;
    }
    .links{
      display: flex;
      gap :20px;
      a{
            display: flex;
            flex-flow: row nowrap;
            border-radius: 3rem;
            outline: none;
            cursor: pointer;
            text-decoration: none;
            color: rgb(0, 0, 0);
            font-size: 1rem;
            width: fit-content;
            margin: 0px 12px;
            font-weight: 500;
      }
    }
  }
}

@media (max-width:750px) {
    .root{
        background-size: 100vh 150%;
    }
}

@media (max-width:600px) {
    .header{
          .logo-container{
              .links{
                  display: none;
              }
          }
    }
}
</style>