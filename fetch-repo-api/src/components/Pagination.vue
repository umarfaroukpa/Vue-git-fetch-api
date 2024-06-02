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

button {
  background-color: #D0B8AC;
  color: whitesmoke;
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  padding: 7px;
  border-bottom: whitesmoke solid 6px;
  cursor: pointer;
  transition: border-color 0.25s;
}

span{
  color: whitesmoke;
}

button:hover {
  background-color: #87573f;
}

@media (max-width: 768px) {
  .pagination {
    flex-direction: column;
  }
  
  button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>