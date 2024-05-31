// 引入必要的模块和钩子
// 应用程序的主题
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
// 用于加载自定义字体的钩子
import {useFonts} from 'expo-font';
// expo-router的堆栈导航
import {Stack} from 'expo-router';
// 用于控制启动画面的模块
import * as SplashScreen from 'expo-splash-screen';
// 用于副作用的React钩子
import {useEffect} from 'react';
// 用于动画的模块
import 'react-native-reanimated';

// 用于获取颜色方案的自定义钩子
import {useColorScheme} from '@/hooks/useColorScheme';

// 防止启动画面在资源加载完成之前自动隐藏
SplashScreen.preventAutoHideAsync();

/**
 * RootLayout是应用程序的根组件。
 * 它处理资源的加载、启动画面的显示以及应用程序的主题。
 * 它还设置了应用程序的主要堆栈导航。
 */
export default function RootLayout() {
    // 获取当前的颜色方案（深色或浅色）
    const colorScheme = useColorScheme();

    // 加载自定义字体SpaceMono
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    // 一旦字体加载完成，隐藏启动画面
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    // 如果字体未加载完成，不渲染任何内容
    if (!loaded) {
        return null;
    }

    // 使用适当的主题渲染主堆栈导航
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                {/*主标签屏幕（隐藏头部,name属性的意思是在导航器中的名称）*/}
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                {/*当找不到其他屏幕时显示的屏幕*/}
                <Stack.Screen name="+not-found"/>
            </Stack>
        </ThemeProvider>
    );
}
