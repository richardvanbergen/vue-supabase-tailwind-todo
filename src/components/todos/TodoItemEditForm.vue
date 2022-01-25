<script lang="ts">
import todoSchema from '@/data/validation/todo-schema'
import {
  validateSchema,
  ValidationPathErrorMap,
} from '@/data/validation/validate'
import { Todo } from '@/stores/todo'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    submitHandler: {
      type: Function as PropType<(data: Todo) => Promise<void>>,
      required: true,
    },
  },
  data() {
    return {
      errors: {} as ValidationPathErrorMap,
    }
  },
  methods: {
    async checkForm(e: Event) {
      e.preventDefault()
      const target = e.target as HTMLFormElement
      const formData = new FormData(target)
      const todo = {
        title: formData.get('title')?.toString() ?? '',
        description: formData.get('description')?.toString() ?? '',
      }

      const validationResult = await validateSchema(todoSchema, todo)
      if (validationResult === true) {
        this.submitHandler(todo)
      } else {
        this.errors = validationResult
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
      <span v-if="errors.title" class="text-red-500">{{
        errors.title.message
      }}</span>
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
      <span v-if="errors.description" class="text-red-500">{{
        errors.description.message
      }}</span>
    </div>

    <button
      type="submit"
      class="px-5 mt-8 place-self-center py-2.5 transition-all overflow-hidden font-medium text-xl rounded-lg bg-green-600 hover:bg-green-800 text-white"
    >
      Submit
    </button>
  </form>
</template>
