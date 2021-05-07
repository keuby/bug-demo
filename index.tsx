import { createApp, defineComponent, ref } from 'vue';

const App = defineComponent({
  setup() {
    const counter = ref(0);

    const onClick = () => counter.value++;

    return () => (
      <div>
        <div>count: {counter.value}</div>
        <button onClick={onClick}>Click me</button>
      </div>
    );
  },
});

createApp(App).mount('#app');
