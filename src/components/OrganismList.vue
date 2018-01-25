<template>
  <main role="main" class="organism-list">

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <a
            :href="linkFor(organism.id)"
            class="col-md-4"
            v-for="(organism, index) in organisms"
            v-bind:key="organism.id || index">

            <div class="card mb-4 box-shadow">
              <img class="card-img-top" :src="organism.thumbnail" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">{{organism.name}}</p>
                <p class="card-text">{{organism.funding}} €</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'OrganismList',
  computed: {
    organisms () {
      const { organisms } = this.$store.state
      return organisms
    }
  },
  created () {
    this.$store.dispatch('fetchOrganisms')
  },
  methods: {
    linkFor (id) {
      return `?id=${id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .organism-list a {
    text-decoration: none;
  }
  .organism-list img {
    max-height: 120px;
  }
  p.cart-text {
    color: black;
  }
</style>
