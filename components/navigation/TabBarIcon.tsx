// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import {type IconProps} from '@expo/vector-icons/build/createIconSet';
import {type ComponentProps} from 'react';

/**
 * TabBarIcon 是一个用于渲染图标的函数组件。是一个导航栏图标组件。
 * @param {object} props - 传入的属性，包括样式和其他属性。
 * @param {object} props.style - 图标的样式。
 * @param {object} rest - 包含其他属性，如图标名称等。
 * @returns {JSX.Element} 返回一个 Ionicons 图标组件。
 */
export function TabBarIcon({style, ...rest}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    // 返回一个 Ionicons 图标组件，大小为 28，样式为传入的样式和 marginBottom: -3，其他属性由 rest 展开得到。
    return <Ionicons size={28} style={[{marginBottom: -3}, style]} {...rest} />;
}
