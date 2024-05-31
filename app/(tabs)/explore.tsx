/**
 * TabTwoScreen组件：展示主题滚动视图，包含多个可折叠的内容区域，分别介绍了
 * 文件路由、多平台支持、图片、自定义字体、主题组件以及动画等功能。
 *
 * 该组件不接受任何参数，并且不直接返回值，而是渲染一个包含多个子组件的视图。
 */
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform} from 'react-native';

import {Collapsible} from '@/components/Collapsible';
import {ExternalLink} from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            // 使用ParallaxScrollView组件，设置头部背景颜色和图像,light是指浅色模式，dark是指深色模式
            headerBackgroundColor={{light: '#c51212', dark: '#19aaaa'}}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage}/>}>
            {/*主题视图和标题*/}
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Explore</ThemedText>
            </ThemedView>
            {/*引入的文本介绍*/}
            <ThemedText>This app includes example code to help you get started.</ThemedText>
            {/*可折叠的内容区域*/}
            <Collapsible title="File-based routing">
                <ThemedText>
                    This app has two screens:{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>
                    The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
                    sets up the tab navigator.
                </ThemedText>
                {/*链接到外部网站*/}
                <ExternalLink href="https://docs.expo.dev/router/introduction">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Android, iOS, and web support">
                <ThemedText>
                    You can open this project on Android, iOS, and the web. To open the web version, press{' '}
                    <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Images">
                <ThemedText>
                    For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
                    different screen densities
                </ThemedText>
                <Image source={require('@/assets/images/react-logo.png')} style={{alignSelf: 'center'}}/>
                <ExternalLink href="https://reactnative.dev/docs/images">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Custom fonts">
                <ThemedText>
                    Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
                    <ThemedText style={{fontFamily: 'SpaceMono'}}>
                        custom fonts such as this one.
                    </ThemedText>
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Light and dark mode components">
                <ThemedText>
                    This template has light and dark mode support. The{' '}
                    <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                    what the user's current color scheme is, and so you can adjust UI colors accordingly.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Animations">
                <ThemedText>
                    This template includes an example of an animated component. The{' '}
                    <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
                    the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
                    to create a waving hand animation.
                </ThemedText>
                {/*平台特定的动画组件展示，如果是ios平台则展示相应的文本*/}
                {Platform.select({
                    ios: (
                        <ThemedText>
                            The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
                            component provides a parallax effect for the header image.
                        </ThemedText>
                    ),
                })}
            </Collapsible>
        </ParallaxScrollView>
    );
}

// 样式表定义
const styles = StyleSheet.create({
    headerImage: {
        color: '#13aaa2',
        // bottom指定图标距离底部的距离，left指定图标距离左侧的距离，position指定图标的定位方式,absolute表示绝对定位,意思是相对于最近的非static定位的父元素进行定位
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
