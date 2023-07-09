<template>
  <form class="addcard" @submit.prevent="addCardToList">
    <input
      v-model="body"
      type="text"
      :class="[{ active: isEditing }]"
      class="text-input"
      placeholder="Add new
card"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button
      type="submit"
      class="add-button"
      v-if="isEditing || bodyExists"
      :class="classObject"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      body: "",
      isEditing: false,
    };
  },
  methods: {
    addCardToList: function () {
      this.$store.dispatch("addCardToList", {
        body: this.body,
        listIndex: this.listIndex,
      });
      this.body = "";
    },
    startEditing: function () {
      this.isEditing = true;
    },
    finishEditing: function () {
      this.isEditing = false;
    },
  },
  computed: {
    classObject() {
      return {
        addable: this.isEditing || this.bodyExists,
      };
    },
    bodyExists() {
      return this.body.length > 0;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #fff;
}
.addable {
  background-color: #00d78f;
  pointer-events: auto;
  cursor: pointer;
}
</style>