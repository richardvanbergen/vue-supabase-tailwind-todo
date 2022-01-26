<script setup lang="ts">
import todoSchema from '@/data/validation/todo-schema'
import {
  validateSchema,
  ValidationPathErrorMap,
} from '@/data/validation/validate'
import { Todo } from '@/stores/todo'
import { reactive, ref, toRefs } from 'vue'

const props = defineProps<{
  submitHandler: (data: Todo) => Promise<void>
}>()

const { submitHandler } = toRefs(props)
const todo = reactive({
  title: '',
  description: '',
})

const errors = ref<ValidationPathErrorMap>({})

const checkForm = async (e: Event) => {
  e.preventDefault()
  const validationResult = await validateSchema(todoSchema, todo)
  if (validationResult === true) {
    submitHandler.value(todo)
  } else {
    errors.value = validationResult
  }
}
</script>

<template>
  <form v-on:submit="checkForm" class="flex flex-col space-y-4">
    <div>
      <label for="title">Task Title</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="todo.title"
        class="w-full mt-2"
      />
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
        v-model="todo.description"
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
