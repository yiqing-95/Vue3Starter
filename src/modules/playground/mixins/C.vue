        
<script type="text/javascript">
   import {fav} from './mixin2'

    export default {
        data(){
            return {
                msg: 'hi'
            }
        }
        // ⚠️这个功能跟 yii框架中的behavior 很类似！！！😂 
        ,mixins :[
            fav,
        ]
    }
        
</script>
<template>
    <div>
        <h3>C 组件</h3>
        {{ num }}
        <button @click="favBtn">收藏</button>
    </div>
</template>

<style lang="scss" scoped>

</style>