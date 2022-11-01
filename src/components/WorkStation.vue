<script setup>
import { getEngineById } from '../data/allData';

defineProps({
  id: String,
  name: String,
  entryTime: Number,
  cycleTimeHrs: String,
  productIsNull: Boolean
})

const engine = getEngineById(__props.id);
var myDate = new Date(__props.entryTime * 1000).getHours();

</script>

<template>
  <div v-if="productIsNull === false">
    <div class="work-station-container m-2">
    </div>
    <div class="card text-center">
      <div class="card-header">
        {{ name }}
      </div>
      <div class="card-body">
        <div class="row">
          <div class="work-station-image col-md-4">
            <img :src="engine.image" height="100" />
          </div>
          <div class="col-md-6">
            <div class="d-flex flex-row">
              <div class="flex-column">
                <small class="p-2 text-muted">Serial Number</small>
                <div>{{ engine.serialNumber }}</div>
              </div>
              <div class="flex-column">
                <small class="p-2 text-muted">Model</small>
                <div>{{ engine.model }}</div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="flex-column">
                <small class="p-2 text-muted">Entry Time</small>
                <div>{{ myDate }}</div>
              </div>
              <div class="flex-column">
                <small class="p-2 text-muted">Cycle Time</small>
                <div>{{ cycleTimeHrs }} hr</div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <small class="p-2 text-muted">Time elapsed</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="product-is-null" v-else="productIsNull === true">
    <div  class="work-station-container m-2">
    </div>
    <div class="card text-center">
      <div class="card-header">
      </div>
      <div class="card-body d-flex justify-content-center align-items-center" style="height:185px">
        
        <bold>No Product</bold>

      </div>
    </div>
  </div>
</template>

<style scoped>
.work-station-container {
  width: 400px;
  background-color: white;
}

.work-station-image {
  height: 150px;
}

.card {
  padding: 0px;
}

.card-header {
  background-color: #1F2937;
  color: white;
  font-size: 1rem;
}

.product-is-null .card-header{
  height:40px;
}
</style>
