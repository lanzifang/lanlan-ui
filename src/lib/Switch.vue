<template>
    <div>
        <button>
            <span></span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    button{
        height:22px;
        width: 44px;
        border: none;
        background: blue;
        border-radius: 11px;
        position: relative;
    }
    span{
        $h:18px;
        position: absolute;
        top: 2px;
        left: 2px;
        //left: 24px;//经测试，这个数值是最合适的
        //left: calc(100%-#{$h}-2px);//这个calc用不明白
        height: 18px;
        width: 18px;
        background: white;
        border-radius: 9px;
    } 
    button:hover>span{
        left: 24px;
    }
</style>