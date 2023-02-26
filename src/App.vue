<script setup>
    import { ref } from "vue"
    const showPopup = ref(false)

    function hidePopup() {
        showPopup.value = false
    }
</script>

<template>
    <div v-click-outside="hidePopup" class="popover-container">
        <button class="button" @click="showPopup=true">Click me</button>
        <div class="popover-content" :class="{ 'show': showPopup }">
            <p>Popover content goes here</p>
        </div>
    </div>
</template>

<style scoped>
    /* button styles */
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 12px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease-out;
    }

    /* Popover container styles */
    .popover-container {
        position: relative;
        display: inline-block;
    }

    /* Popover content styles */
    .popover-content {
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 10px;
        font-size: 14px;
        line-height: 1.5;
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s linear;
    }

    /* Show popover when isPopoverVisible is true */
    .popover-content.show {
        visibility: visible;
        opacity: 1;
    }

</style>
