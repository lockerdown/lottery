<template>
    <div class="">
        <random level="second"></random>
    </div>
</template>
<script>
import random from '@/components/randomNum'
export default {
    name: 'second',
    data() {
        return {
            count: 1
        }
    },
    components: {
        'random': random
    },
    created() {
        console.log(1);
    },
    methods: {

    }
}
</script>