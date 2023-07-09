<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card
        v-for="(item, index) in cards"
        :body="item.body"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      />
      <card-add :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import CardAdd from "./CardAdd.vue";
import Card from "./Card";

export default {
  components: {
    CardAdd,
    Card,
    Draggable,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeList: function () {
      if (confirm("Do you really want to remove this list?")) {
        this.$store.dispatch("removelist", { listIndex: this.listIndex });
      }
    },
  },
  computed: {
    totalCardInList() {
      return this.cards.length;
    },
  },
};
</script>