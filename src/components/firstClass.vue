<template>
    <div class="">
        <random level="first"></random>
    </div>
</template>

<script>
import random from '@/components/randomNum'
export default {
    name: 'first',
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
