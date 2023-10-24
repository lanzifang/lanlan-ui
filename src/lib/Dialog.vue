<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>内容1</p>
            <p>内容2</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default{
    components:{
        Button
    }
}
</script>