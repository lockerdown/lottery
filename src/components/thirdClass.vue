<template>
    <div class="">
        <random level="third"></random>
    </div>
</template>
<script>
import random from '@/components/randomNum'
export default {
    name: 'third',
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