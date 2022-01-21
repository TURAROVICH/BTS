<template>
  <main>
    <div class="card-header">
     <small> <span>Swap</span></small> <div class="settings"><small><strong>settings</strong></small><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-fIosxK iWOZxd"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div> 
    </div>

    <div class="form-1">
      <div @click="modalToken = 'f'" class="select-token-btn" :style="{'background-color':firstToken && '#d5e9f0'}">
        <img width="20" v-if="firstToken" :src="firstToken.img" alt="">
        <span v-if="!firstToken">Select token</span>
        <span v-if="firstToken">{{firstToken.name }} </span>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-cnHmbd iUcBeX"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#000"></path></svg>
      </div>
      <div class="input">
        <input placeholder="0.0" v-model="finput" type="text">
        <div class="span-desc">≈ {{fprice | toFixed}}</div>
      </div>
    </div>

      <div class="form-1">
        <div @click="change" class="replace">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-kOJRsK lfHjfN"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
      </div>
      <div @click="modalToken = 's'" class="select-token-btn"  :style="{'background-color':secondToken && '#d5e9f0'}">
        <img width="20" v-if="secondToken" :src="secondToken.img" alt="">
        <span v-if="!secondToken">Select token</span>
        <span v-if="secondToken">{{secondToken.name}}</span>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-cnHmbd iUcBeX"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#000"></path></svg>
      </div>
      <div class="input">
        <input placeholder="0.0" v-model="sinput" type="text">
        <div class="span-desc">≈ {{sprice | toFixed}}</div>
      </div>
    </div>

    <!-- <div class="result-container" v-if="showResult">
      <div class="description">
        <span>Price</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
      </div>
      <div class="info">
        <span>1 WETH = <strong> 2.5$TDRL </strong> (≈$0.73)</span>
      </div>

       <div class="description">
        <span>Slippage tolerance</span>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-ccdLe exAnlM"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </div>
      <div class="info">
        <span><strong> 50% </strong></span>
      </div>


      <div class="description">
        <span>Fees (incl. gas costs)</span>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-ccdLe exAnlM"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </div>
      <div class="info">
        <span><strong> 2.5$TDRL </strong> (≈$0.73)</span>
      </div>
    </div> -->

    <button class="button-wfull" @click="showResult=true;$store.commit('modals/toggle',true)">Connect wallet</button>
    <modal-select v-if="modalToken" @close="modalToken = false" :type="modalToken" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data:()=>({
    modalToken:false,
    showResult:false,
    finput:'',
    sinput:''
  }),
  computed:{
    firstToken(){
      return this.$store.state.tokens.firstToken
    },
    secondToken(){
      return this.$store.state.tokens.secondToken
    },
    fprice(){
      if(!this.firstToken) return 0.0
      return this.finput ? +this.finput / +this.firstToken.price  : 0.0
    },
    sprice(){
      if(!this.secondToken) return 0.0
      return this.firstToken ? +this.secondToken.price : this.sinput ? +this.sinput / +this.secondToken.price  : 0.0
    }
  },
  filters:{
    toFixed(v){
      return v.toFixed(6)
    }
  },
  watch:{
    finput(n){
      if(!this.firstToken && !this.secondToken) return 
      this.sinput = (+this.firstToken.price * +n) / +this.secondToken.price
    }
  },
  methods:{
    change(){
      if(!this.firstToken && !this.secondToken) return
      const ft = this.$store.state.tokens.firstToken
      const st = this.$store.state.tokens.secondToken
      this.finput = ''
      this.sinput = ''
      this.$store.commit('tokens/setFirstToken',st)
      this.$store.commit('tokens/setSecondToken',ft)

    }
  }
}
</script>

<style lang="scss" scoped>
main{
    box-shadow: 5px 2px 3px #000;
    width: 30%;
    border: 3px solid #000;
    border-radius: 10px;
    margin: 30px auto;
    background: rgba(213, 233, 240);
    padding: 20px;
    .settings{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .result-container{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      font-size: 12px;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      .description{
        svg{
          height: 11px;
        }
      }
      .info{
        text-align: right;
      }
    }
    .card-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      border: none;
      margin-bottom: 10px;
    }
    .form-1{
          background: rgb(255, 255, 255);
          border: 2px solid rgb(175, 203, 218);
          border-radius: 20px;
          min-height: 60px;
          margin-bottom: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          position: relative;
          .replace{
            border: 2px solid rgb(175, 203, 218);
            width: 30px;
            height: 30px;
            border-radius: 9px;
            display: flex;  
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -22px;
            left: 50%;
            background: #fff;
            cursor: pointer;
          }
          input{
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 24px;
            text-align: right;
          }
          .span-desc{
            text-align: right;
          }
         
    }
   
}

@media (max-width:1100px) {
  main{
    width: 50%;
  }
}

@media (max-width:620px) {
  main{
    width: 90%;
  }
}



</style>
