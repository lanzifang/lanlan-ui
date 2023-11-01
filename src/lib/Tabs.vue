<template>
    <div class="lanlan-tabs">
        <div class="lanlan-tabs-nav" ref="container">
            <div class="lanlan-tabs-nav-item" 
            :class="{selected:t===selected}" 
            v-for="(t,index) in titles" 
            :ref="el=>{if(t===selected) selectedItem=el}"
            @click="select(t)"
            :key="index">{{ t }}</div>    
            <div class="lanlan-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="lanlan-tabs-content">
            <component class="lanlan-tabs-content-item" :is="current" :key="current.props.title" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue'
import Tab from './Tab.vue'
export default{
    props:{
        selected:{
            type:String
        }
    },
    setup(props,context){
        const defaults=context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type!==Tab){
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const titles=defaults.map((tag)=>{
            return tag.props.title
        })
        const current=computed(()=>{
            return defaults.find(tag=>tag.props.title===props.selected)
        })
        const selectedItem=ref(null)
        const indicator=ref<HTMLDListElement>(null)
        const container=ref<HTMLDListElement>(null)
        const x=()=>{
            const {width}=selectedItem.value.getBoundingClientRect()
            indicator.value.style.width=width+'px'
            const {left:left1}=container.value.getBoundingClientRect()
            const {left:left2}=selectedItem.value.getBoundingClientRect()
            const left= left2-left1
            indicator.value.style.left=left+'px'
        }
        onMounted(x)
        onUpdated(x)
        const select=(title:string)=>{
            context.emit('update:selected',title)
        }
        return{defaults,titles,current,select,selectedItem,indicator,container}
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lanlan-tabs{
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child{
                margin-left: 0;
            }

            &.selected{
                color: $blue;
            }
        }

        &-indicator{
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content{
        padding: 8px 0;
    }
}
</style>