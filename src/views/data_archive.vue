<template>
  <div>
    <h1>File Reader Component</h1>
    <input type="file" @change="handleFiles" />
    <div v-if="data.length">
      <h2>Preview Data:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import { processFile } from '@/api/dataArchiveReadin';

export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    handleFiles(event) {
      const file = event.target.files[0];
      if (!file) return;
      processFile(file).then(data => {
        this.data = data;
      }).catch(error => {
        console.error('File processing error:', error);
      });
    }
  }
};
</script>
