<template>
    <form class="col-6" @submit.prevent="search">
    <div class="input-group m-3">
      <input
        type="date"
        class="form-control"
        placeholder=""
        aria-label=""
        v-model="query"
      />
      <button class="btn btn-success" type="submit">
        <i class="mdi mdi-magnify"></i>
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { photosService } from '../services/PhotosService'
import { logger } from '../utils/Logger'
export default {
    setup(){
        const query = ref('')
        return {
            query, 
            async search(){
                try {
                    await photosService.search(query.value)
                } catch (error) {
                    logger.error(error)
                }
            }
        }
    }
}
</script>


