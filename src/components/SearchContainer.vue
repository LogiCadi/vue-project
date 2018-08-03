<template>
    <div class="search-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    SearchContainer
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted(){
        this.$emit("change-title", "搜索");
    }
}
</script>

<style lang="scss" scoped>

</style>

