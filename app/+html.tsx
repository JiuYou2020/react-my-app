import {ScrollViewStyleReset} from 'expo-router/html';
import {type PropsWithChildren} from 'react';

/**
 * 此文件仅适用于 Web，用于在静态渲染期间配置每个网页的根 HTML。此函数的内容仅在 Node. js 环境中运行，
 * 无法访问 DOM 或浏览器 API。
 */
export default function Root({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            {/*
            在网络上禁用正文滚动。这使得 ScrollView 组件的工作方式更接近它们在本机上的工作方式。
            然而，对于移动网络来说，身体滚动通常是很好的选择。如果您想启用它，请删除此行。
            */}
            <ScrollViewStyleReset/>

            {/* 使用原始 CSS 样式作为escape-hatch，以确保背景颜色在黑暗模式下不会闪烁。*/}
            <style dangerouslySetInnerHTML={{__html: responsiveBackground}}/>
            {/* 添加您希望在网络上全局可用的任何其他 <head> 元素... */}
        </head>
        <body>{children}</body>
        </html>
    );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
