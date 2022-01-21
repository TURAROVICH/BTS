<template>
   <div class="faq-container">
       <div class="faq-links-container">
           <h2>CowSwap FAQ</h2>
            <a href="#General" class="simple">General</a> <br>
            <a href="#" class="under-link">What is CowSwap?</a> 
            <a href="#" class="under-link">What is CowSwap?</a>
            <a href="#" class="under-link">What is CowSwap?</a>
            <a href="#" class="under-link">What is CowSwap?</a>
            <a href="#" class="under-link">What is CowSwap?</a>
       </div>
       <div id="General" class="general-container">
           <h2 style="color:#ff784a;">General</h2>
           <h3 style="margin-top:20px;">What is CowSwap?</h3>
            <div style="margin-top:10px;">CowSwap is the first trading interface built on top of CoW Protocol. <br>CowSwap is a Meta DEX aggregator that allows you to buy and sell tokens using gasless orders that are settled peer-to-peer among its users, or into any on-chain liquidity source while providing MEV protection.</div>
       </div>
   </div>
</template>


<style lang="scss" scoped>
.faq-container{
    width: 40%;
    margin: 30px auto;
    > div{
    border-radius: 16px;
    background: rgba(213, 233, 240, 0.5);
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding:20px;
    }
}


a{
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
}
a.under-link{
    display: flex;
    align-items: center;
    gap: 10px;
}
a.under-link::before{
    content: "";
    width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ff784a;
}
.general-container{
    margin-top: 20px;
}

@media (max-width:1000px) {
    .faq-container{
        width: 70%;
    }
}

@media (max-width:570px) {
    .faq-container{
        width: 95%;
    }
}
</style>