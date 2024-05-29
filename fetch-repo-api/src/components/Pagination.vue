<template>
   <div class="Pagination">
    <button @click="$emit('prevPage')" :disabled="currentPage === 1">Previous Page</button>
     <span>Page {{ currentPage }}</span>
    <button @click="$emit('nextPage')" :disabled="!hasMore">Next Page</button>
   </div>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },

      hasMore: {
        type: Boolean,
        required: true
      }
    }
  };
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>