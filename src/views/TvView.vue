<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import { useGenreStore } from '@/stores/genre'

const router = useRouter()
const genreStore = useGenreStore()
const tvShows = ref([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv')
  isLoading.value = false
})

function visualizar(id) {
  router.push(`/tv/${id}`) //template string
}

const listTvShows = async (genreId) => {
  isLoading.value = true
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  })
  tvShows.value = response.data.results
  isLoading.value = false
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>
  <h1 class="programa">Programas de TV</h1>

  <main class="corpo">
    <ul class="genre-list">
      <li
        v-for="genre in genreStore.genres"
        :key="genre.id"
        @click="listTvShows(genre.id)"
        class="genre-item"
      >
        {{ genre.name }}
      </li>
    </ul>

    <loading v-model:active="isLoading" is-full-page />

    <div class="tv-list">
      <div v-for="tvShow in tvShows" :key="tvShow.id" class="tv-card">
        <img
          @click="visualizar(tvShow.id)"
          :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`"
          :alt="tvShow.title"
        />
        <div class="tv-details">
          <p @click="visualizar(tvShow.id)" class="tv-title">{{ tvShow.name }}</p>
          <p>{{ formatDate(tvShow.first_air_date) }}</p>
          <p class="tv-genres">
            <span
              v-for="genre_id in tvShow.genre_ids"
              :key="genre_id"
              @click="listTvShows(genre_id)"
            >
              {{ genreStore.getGenreName(genre_id) }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.programa {
  text-align: center;
}

.genre-list {
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  list-style: none;
  margin-top: 3rem;
}

.genre-item {
  background-color: var(--vt-c-black);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  filter: grayscale(60%);
}

.tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 5rem 0;
}

.tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
}

.tv-details {
  padding: 0 0.5rem;
}

.tv-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: normal;
  margin: 0.5rem 0;
  cursor: pointer;
}

.tv-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  margin-top: 0.5rem;
}

.tv-genres span {
  background-color: var(--vt-c-black);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.tv-genres span:hover {
  cursor: pointer;
  filter: grayscale(60%);
}
</style>
