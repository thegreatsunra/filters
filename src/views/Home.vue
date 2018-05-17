<template>
  <div>
    <ul v-for="category in tree" v-bind:key="category.name">
      <li>
        {{category.name}}
        <ul>
          <li v-for="parent in category.children" v-bind:key="parent.name">
            <span v-if="!isSelected(parent)" @click="selectItem(parent)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g></svg></span>

            <span v-if="isSelected(parent)" @click="deselectItem(parent)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g></svg></span>

            <span v-if="isActive(parent)" @click="selectItem(parent)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g></svg></span>
            {{parent.name}}
            <ul>
              <li v-for="child in parent.children" v-bind:key="child.name">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g></svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g></svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g class="nc-icon-wrapper" fill="#111111"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g></svg></span>
                {{child.name}}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    {{chips}}<br>
    {{filter}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      tree: this.$store.state.Tree,
      filter: this.$store.state.Filter,
      chips: this.$store.state.Chips

    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    selectItem (item) {
      if (!this.filter.find(({name}) => name === item.name)) {
        this.$store.dispatch('addItem', item)
      }
    },
    deselectItem (item) {
      const index = this.filter.findIndex(({name}) => name === item.name)
      if (index) {
        this.$store.dispatch('deleteItem', index)
      }
    },
    isSelected (item) {
      if (this.filter.find(({name}) => name === item.name)) {
        return true
      } else {
        return false
      }
    },
    isActive (item) {

    }

  }
}
</script>

<style lang="scss">
</style>
