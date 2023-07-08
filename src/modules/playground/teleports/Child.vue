<script setup>
  

</script>

<template>
    <div>
        this is child

        <Teleport to="#some_id">
            <div>
                this is content from child 

            </div>
        </Teleport>
        <Teleport to="#some_id">
            <div>
                this is content2 from child 

            </div>
        </Teleport>

    </div>
</template>



<style lang="scss" scoped>

</style>