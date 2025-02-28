import { type App } from 'vue';

export function getAdapter<T>(
  type: string = 'element',
  adapterMap: Record<string, T>
): T {
  return adapterMap[type] || adapterMap['element'];
}

// 全局注册组件
export function registerComponent(app: App, name: string, component: any) {
  app.component(name, component);
}

