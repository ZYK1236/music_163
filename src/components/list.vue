<template>
  <a-list item-layout="horizontal" :data-source="hotSingers">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta>
        <a slot="title" href="#">{{ item.name }}</a>
        <a-avatar slot="avatar" :src="item.picUrl" />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  props: ['hotSingers']
};
</script>

<style>
</style>