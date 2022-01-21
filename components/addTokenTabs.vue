<template>
    <main>
        <div class="tabs">
            <div :class="{'active':active === 0}" @click="active= 0" class="tab">
                <span>Phrase </span>
            </div>
            <div :class="{'active':active === 1}" @click="active= 1" class="tab">
                <span>Keystore</span>
            </div>
            <div :class="{'active':active === 2}" @click="active= 2" class="tab">
                <span>Private Key</span>
            </div>
        </div>
        <div class="contents">
            <textarea v-if="active===0" v-model="phrase" placeholder="Phrase"></textarea>
            <textarea v-if="active===1" v-model="keyStore" placeholder="KeyStore JSON"></textarea>
            <input v-if="active===1"    v-model="password"  type="password" placeholder="Password">
            <textarea v-if="active===2" v-model="privateKey" placeholder="Private key"></textarea>
        </div>
    </main>
</template>

<script>
export default {
    data:()=>({
        active:0,
        phrase:'',
        keyStore:'',
        password:'',
        privateKey:''
    }),
    watch:{
       phrase(){
           this.$emit('data',{phrase:this.phrase,keyStore:this.keyStore,password:this.password,private:this.privateKey})
       },
        keyStore(){
           this.$emit('data',{phrase:this.phrase,keyStore:this.keyStore,password:this.password,private:this.privateKey})
        },       
        password(){
           this.$emit('data',{phrase:this.phrase,keyStore:this.keyStore,password:this.password,private:this.privateKey})
       }, 
        privateKey(){
           this.$emit('data',{phrase:this.phrase,keyStore:this.keyStore,password:this.password,private:this.privateKey})
       },
    }
}
</script>

<style lang="scss" scoped>
main{
    margin: 20px 0;
    padding: 20px;
}
textarea{
    width: 100%;
    min-height: 50px;
    outline: none;
    padding: 20px;
    border: 1px solid silver;

}
input{
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid silver;
}
.tabs{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .tab{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: #B2BABB;
        cursor: pointer;
        span{
            color: #F2F3F4;
        }
    }
    .active{
        background: #F2F3F4;
        span{
            color:#85929E;
        }
    }
}
</style>