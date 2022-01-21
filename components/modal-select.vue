<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-header">
                <small style="font-weight: 500;"><span>Select token</span></small>
                <svg style="cursor:pointer;" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dkPtRN eoNyNE"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div class="search">
                <input v-model="inputModel" type="text" placeholder="Search name or paste address">
            </div>
            <div class="common">
                <small style="font-weight: 500;"><span>Common tokens</span></small>
                <div class="common-tokens">
                    <div class="token" v-for="(i,k) in Object.values(storeTokens).slice(0,4)" @click="setToken(i)" :key="k">
                        <img :src="i.img" alt="">
                        <span>{{i.name}}</span>
                    </div>
                </div>
            </div>
            <div class="all-tokens">
                <div class="token" v-for="(i,k) in tokens" :key="k" @click="setToken(i)">
                    <img :src="i.img" alt="">
                    <div class="info">
                        <span>{{i.name}}</span>
                        <span class="span-desc">{{i.fullname}}</span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
               <div>Manage token list</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['type'],
    data:()=>({
        inputModel:'',
        tokens:[]
    }),
    computed:{
        storeTokens(){
            return this.$store.state.tokens.tokens
        },
        input(){
            return this.inputModel.toUpperCase()
        }
    },
    mounted(){
        this.tokens = this.storeTokens
    },
    watch:{
        inputModel(){
            const nTokens = Object.entries(this.tokens).filter(i=>{
               if(i[1].name.includes(this.input)) return true
               if(i[1].fullname.includes(this.input)) return true
               else false
            })
            this.tokens = Object.fromEntries(nTokens)
        }
    },
    methods:{
        setToken(i){
            if(this.type === 'f'){
              this.$store.commit('tokens/setFirstToken',i)
            }
            if(this.type === 's'){
              this.$store.commit('tokens/setSecondToken',i)
            }
            this.$emit('close')
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
    max-height: 80vh;
    min-height: 80vh;
    border-radius: 20px;
    padding: 20px;
    &-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .search{
        margin-top: 20px;
        input{
            height: 50px;
            outline: none;
            background: transparent;
            padding: 10px 20px;
            font-size: 14px;
            border: none;
            border-radius: 20px;
            width: 100%;
            transition: background 0.3s ease-in-out 0s;
            box-shadow: rgb(255 255 255) 2px -2px 4px inset, rgb(162 200 216) -2px 2px 4px inset;
        }
    }
    .common{
        margin-top: 20px;
        &-tokens{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
            .token{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 10px;
                padding: 5px;
                gap :10px;
                cursor: pointer;
                img{
                    width: 24px;
                    height: 24px;
                }
                span{
                    font-weight: 500;
                    font-size: 14px;
                    text-transform: uppercase;
                }
                &:hover{
                    background: #fff;
                }
            }
        }
        @media (max-width:470px) {
            &-tokens{
                flex-wrap: nowrap;
                overflow-x: scroll;
            }
        }
    }
   .all-tokens{
       height: 180px;
       overflow-y: scroll;
       box-shadow: rgb(255 255 255) 2px -2px 4px inset, rgb(162 200 216) -2px 2px 4px inset;
       margin-top: 20px;
       .token{
            display: flex;
            align-items: center;
            padding: 10px;
            gap :10px;
            cursor: pointer;
                .info{
                    display: flex;
                    flex-direction: column;
                }
                img{
                    width: 24px;
                    height: 24px;
                }
                span:first-child{
                    font-weight: 500;
                    font-size: 14px;
                    text-transform: uppercase;
                }
                &:hover{
                    background: #fff;
                }
            }
        }
    .modal-footer{
        padding: 15px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        div{
            cursor: pointer;
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
         .all-tokens{
             height: 230px;
         }
    }
}
</style>