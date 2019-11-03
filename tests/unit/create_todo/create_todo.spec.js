import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

// import todosModule from '@/store/modules/todos';
import CreateTodo from '@/views/CreateTodo.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const customWrapper = (text, store) => shallowMount(CreateTodo, {
  data() {
    return {
      newTodo: {
        text,
        labels: [],
      },
    };
  },
  store,
  localVue,
});

describe('CreateTodos', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      createTodo: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  describe('submitTodo', () => {
    it('should not submit when text is empty', () => {
      const wrapper = customWrapper('', store);

      const form = wrapper.find('form[data-form-test]');
      form.trigger('submit');

      expect(actions.createTodo).not.toHaveBeenCalled();
    });

    it('should not submit when text consists of whitespace', () => {
      const wrapper = customWrapper('      ', store);

      const form = wrapper.find('form[data-form-test]');
      form.trigger('submit');

      expect(actions.createTodo).not.toHaveBeenCalled();
    });

    it('should submit if it consists of plain text', () => {
      const wrapper = customWrapper('Wat', store);

      const form = wrapper.find('form[data-form-test]');
      form.trigger('submit');

      expect(actions.createTodo).toHaveBeenCalled();
    });
  });
});
