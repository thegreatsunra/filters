const state = [
  {
    name: 'cpus',
    children: []
  },
  {
    name: 'motherboards',
    children: []
  },
  {
    name: 'storage',
    children: []
  }
]

const mutations = {
  ADD_ITEM (state, payload) {
    state.push(payload)
  },
  DELETE_ITEM (state, index) {
    state.splice(index, 1)
  }
}

const actions = {
  addItem: async ({ commit }, payload) => {
    try {
      await commit('ADD_ITEM', payload)
    } catch (error) {
    }
  },
  deleteItem: async ({ commit }, index) => {
    try {
      await commit('DELETE_ITEM', index)
    } catch (error) {
    }
  }
}

const getters = {
}

export default {
  actions,
  getters,
  mutations,
  state
}
