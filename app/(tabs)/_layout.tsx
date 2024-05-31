import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function TabLayout() {
    // 使用自定义hook获取系统颜色方案
    const colorScheme = useColorScheme();
    // 渲染底部标签导航
    return (
        <Tabs
            screenOptions={{
                // 根据颜色方案设置标签栏激活时的颜色，并隐藏头部导航
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    // 配置“首页”标签页：标题和图标
                    title: 'Home',
                    // 根据标签页是否被激活，使用不同的图标样式
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    // 配置“探索”标签页：标题和图标
                    title: 'Explore',
                    // 根据标签页是否被激活，使用不同的图标样式
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
