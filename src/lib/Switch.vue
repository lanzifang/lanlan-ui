<template>
    <div>
        <button @click="toggle" :class="{checked:value}">
            <span></span>
        </button>
    </div>
</template>

<script lang="ts">

export default{
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggle=()=>{
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
}
</script>

<style lang="scss" scoped>
    button{
        height:22px;
        width: 44px;
        border: none;
        background:#bfbfbf;
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
        transition: all 250ms;
    } 
    button.checked{
        background: #1890ff;
    }
    button.checked>span{
        left: 24px;
    }
    button:focus{
        outline: none;
    }
    button:active{
        >span{width: 22px;}
    }
    button.checked:active{
        >span{width: 22px;margin-left: -4px;}
    }
</style>