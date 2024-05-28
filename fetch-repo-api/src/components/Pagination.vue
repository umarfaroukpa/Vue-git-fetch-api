<template>
   <div>
    <button @click="$emit('prevPage')" :disabled="currentPage === 1">Previous Page</button>
    <button @click="$emit('nextPage')" :disabled="!hasMore">Next Page</button>
   </div>
</template>

<script>
  export default {
    props: ['currentPage', 'hasMore']
  };
</script>