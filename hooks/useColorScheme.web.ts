// 注意：默认的 React Native 样式不支持服务器渲染。
// 服务器渲染的样式在 HTML 的第一次渲染之间不应更改
// 以及客户端上的第一次渲染。通常，Web 开发人员会使用 CSS 媒体查询
// 在客户端和服务器上呈现不同的样式，这些在 React Native 中不直接支持
// 但可以使用像 Nativewind 这样的样式库来实现。
export function useColorScheme() {
  return 'light';
}
