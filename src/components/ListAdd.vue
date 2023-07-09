<template>
  <form class="addlist" @submit.prevent="addList">
    <input
      v-model="title"
      type="text"
      :class="[{ active: isEditing }]"
      class="text-input"
      placeholder="Add new
    list"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button
      type="submit"
      class="add-button"
      v-if="isEditing || titleExists"
      :class="classObject"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      title: "",
      isEditing: false,
    };
  },
  methods: {
    addList: function () {
      this.$store.dispatch("addlist", { title: this.title });
      this.title = "";
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
        addable: this.isEditing || this.titleExists,
      };
    },
    titleExists() {
      return this.title.length > 0;
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