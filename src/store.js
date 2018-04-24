import Vue from 'vue'
import Vuex from 'vuex'
import YTSearch from 'youtube-search'

const API_KEY = 'AIzaSyBGVw6Zwim6Q69buB8RBHXOZLgvD5Ljy4I'
const SEARCH_OPTIONS = {
  key: API_KEY,
  maxResults: 10,
  type: 'video'
}

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchTerm: '',
    selectedVideo: null,
    videoList: [],
    history: []
  },
  mutations: {
    updateVideoList: function (state, videos) {
      console.log('updating video list')
      state.videoList = videos
      if (state.selectedVideo === '') {
        state.selectedVideo = videos[0]
      }
      console.log(state.videoList)
    },
    updateSearchTerm: function (state, text) {
      state.searchTerm = text
    },
    setSelectedVideo: function (state, video) {
      state.selectedVideo = video
      store.commit('addToHistory')
    },
    addToHistory: function (state) {
      state.history.push(state.selectedVideo)
    }
  },
  actions: {
    updateVideoList: function ({ commit, state }) {
      console.log('Searching for ' + state.searchTerm)
      YTSearch(state.searchTerm, SEARCH_OPTIONS, function (err, videos) {
        if (err) {
          alert(err)
        }
        commit('updateVideoList', videos)
      })
    }
  }
})
