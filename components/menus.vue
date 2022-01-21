<template>
    <div class="modal-container">
        <div class="modal">
            <div style="cursor:pointer;" class="modal-header" @click="$emit('close')">
                <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dkPtRN eoNyNE"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div class="menus-container">
                <nuxt-link to="/" class="item-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                    <span>Swap</span>
                </nuxt-link>
                <nuxt-link to="/profile" class="item-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>Profile</span>
                </nuxt-link>
                <nuxt-link to="/about" class="item-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>About</span>
                </nuxt-link>
                <nuxt-link to="/FAQ" class="item-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <span>FAQ</span>
                </nuxt-link>
                 <nuxt-link to="/docs" class="item-menu">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    <span>Docs</span>
                </nuxt-link>
            </div>
             <nuxt-link to="/terms-and-conditions" class="item-menu">
                    <span>Terms and Conditions</span>
             </nuxt-link>
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
    justify-content: flex-end;
}
.modal{
    background: rgb(213, 233, 240);
    width: 20%;
    background-color: rgb(213, 233, 240);
    border: 1px solid rgb(213, 233, 240);
    box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
    min-height: 80vh;
    border-radius: 20px;
    padding: 20px;
    margin: 25px 20px 0 0;
    &-header{
        display: flex;
        align-items: center;
        justify-content:center;
        background: rgb(175, 203, 218);
        padding: 5px;
        border-radius: 9px;
    }
    .menus-container{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        border-bottom: 1px solid rgb(175, 203, 218);
        
    }
   
    
}
.item-menu{
    color: #000;
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 40px;
    gap: 10px;
    padding: 15px 20px;
    border-radius: 5px;
    align-items: center;
    &:hover{
        background: rgb(175, 203, 218);
    }
    &:focus{
        background: rgb(175, 203, 218);
    }
}

@media (max-width:700px) {
    .modal{
        width: 100%;
        height: 100vh;
        border-radius: 0;
        max-width: 100%;
        max-height: 100vh;
        margin: 0;
        &-header{
            justify-content: flex-end;
        }
    }
}
</style>