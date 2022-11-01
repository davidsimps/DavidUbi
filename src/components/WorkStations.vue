<script setup>
import WorkStation from '../components/WorkStation.vue';
import { getWorkStations, getEngines } from '../data/allData.js'

let workStations = await getWorkStations();
await getEngines();

</script>

<template>
    <div class="d-flex flex-wrap">
        <div v-for="station in workStations" :key="station.name">
            <div class="p-4">
                <WorkStation 
                    :id="station.currentProduct?.id"
                    :entryTime="station.currentProduct?.entryTime" 
                    :cycleTimeHrs="station.cycleTimeHrs"
                    :name="station.name"
                    :productIsNull="station.currentProduct === null"/>
            </div>
        </div>
    </div>
</template>

