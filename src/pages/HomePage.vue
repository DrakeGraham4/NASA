<template>
  <div class="container">
    <div class="row">
      <SearchForm />
    </div>

  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img :src="photo.url" alt="" class="">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
       APOD
      </h1>
    </div>
  </div>
    </div>


</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { nasaApi } from '../services/AxiosService'
import { photosService } from '../services/PhotosService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup(){
    onMounted(async ()=> {
      try {
        await photosService.search(new Date().toISOString().split('T')[0])
      } catch (error) {
        logger.error(error)
      }
    })
    return{
      photo: computed(() => AppState.photo)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
