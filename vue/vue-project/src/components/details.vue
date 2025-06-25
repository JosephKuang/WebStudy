<template>
    <div>
        <ul>
            <li>id:{{ id }} </li>
            <li>title:{{ title }} </li>
        </ul>
    </div>
</template>
<script lang="ts" >
export default {
    name: 'news'
}
</script>

<script lang="ts" setup>

defineProps(['id', 'title'])

</script>