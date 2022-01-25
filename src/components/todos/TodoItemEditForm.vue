<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      errors: {
        title: null,
        description: null,
      } as { title: string | null; description: string | null },
      title: null,
      description: null,
    }
  },
  methods: {
    checkForm(e: Event) {
      e.preventDefault()
      let formIsValid = true
      if (e.target) {
        const formData = new FormData(<HTMLFormElement>e.target)

        const title = formData.get('title')
        const description = formData.get('description')

        this.errors = {
          title: null,
          description: null
        }

        if (!title) {
          formIsValid = false
          this.errors.title = 'Please enter a title.'
        }

        if (!description) {
          formIsValid = false
          this.errors.description = 'Please enter a description.'
        }

        if (formIsValid) {
          // execute
        }
      }
    },
  },
})
</script>

<template>
  <form v-on:submit="checkForm" class="flex flex-col space-y-4">
    <div>
      <label for="title">Task Title</label>
      <input type="text" name="title" id="title" class="w-full mt-2" />
      <span v-if="errors.title">{{ errors.title }}</span>
    </div>
    <div>
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        class="w-full mt-2"
        cols="30"
        rows="10"
      ></textarea>
      <span v-if="errors.description">{{ errors.description }}</span>
    </div>

    <button type="submit" class="text-white bg-green-500">Submit</button>
  </form>
</template>
