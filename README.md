```typescript
import { defineConfig } from 'vite';
import jsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    jsx(),
    legacy({
      targets: ['defaults'],
      polyfills: ['es.object.values'],
    }),
  ],
  build: {
    // 这里加上这个配置
    cssCodeSplit: false,
  },
});
```
如上述，加上 `build.cssCodeSplit` 这个配置为 false 后，打包后，css 文件就没了

![image](https://user-images.githubusercontent.com/32365592/117521441-5fd10100-afe0-11eb-8337-5a3a0f6f9424.png)

把 `build.cssCodeSplit` 这个配置为 true 后，打包后 css 正常

![image](https://user-images.githubusercontent.com/32365592/117521725-d3bfd900-afe1-11eb-8227-e374210d921c.png)
