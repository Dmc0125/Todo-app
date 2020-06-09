<script>
import { mapGetters, mapActions } from 'vuex';

import AppInput from '@/layouts/input/Input.vue';
import AppPlusIcon from '@/layouts/icons/PlusIcon.vue';

export default {
  components: {
    AppInput,
    AppPlusIcon,
  },
  data() {
    return {
      groupName: '',
    };
  },
  methods: {
    selectGroup(groupId) {
      this.selectTodoGroup(groupId);
    },
    ...mapActions(['createTodoGroup', 'selectTodoGroup']),
  },
  computed: mapGetters({
    groups: 'getGroups',
  }),
};
</script>

<template>
  <section class="w-full mt-6">
    <header>
      <h1 class="h-secondary">Group</h1>
    </header>

    <ul class="w-full mt-3">
      <li v-for="{ name, selected, id } in groups" :key="id" class="w-full mt-2">
        <button @click.prevent="selectGroup(id)" class="w-full ml-2 flex items-center">
          <div :class="[
              'w-4 h-4 border-2 rounded-full flex-center',
              selected ? 'border-green-500' : 'border-gray-600',
            ]"
          >
            <div v-if="selected" class="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span class="ml-2 text-gray-500 font-medium">{{ name }}</span>
        </button>
      </li>
      <li class="mt-3">
        <form @submit.prevent="createTodoGroup(groupName)" class="flex items-center">
          <button type="submit" class="w-8 h-8 mr-2 flex-shrink-0 labels-btn-inner">
            <AppPlusIcon />
          </button>

          <AppInput :value.sync="groupName" label="Group name" placeholder />
        </form>
      </li>
    </ul>
  </section>
</template>
