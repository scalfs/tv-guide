import * as SplashScreen from 'expo-splash-screen'
import { ReactNode, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

SplashScreen.preventAutoHideAsync().catch()

interface Props {
  children: ReactNode
}

export default function AnimatedAppLoader({ children }: Props) {
  const animation = useSharedValue(1)
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  const onImageLoaded = async () => {
    await SplashScreen.hideAsync()
    setAppReady(true)
  }

  useEffect(() => {
    if (isAppReady) {
      animation.value = 0
    }
  }, [isAppReady])

  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  const derived = useDerivedValue(() => {
    if (!isAppReady) return animation.value

    return withTiming(
      animation.value,
      { duration: 500 },
      runOnJS(completeAnimation)
    )
  }, [isAppReady])

  const bgStyle = useAnimatedStyle(() => {
    return {
      opacity: derived.value,
      backgroundColor: '#111111'
    }
  })

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: interpolate(derived.value, [0, 1], [-100, 0]) }]
    }
  })

  return (
    <View style={styles.container}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, bgStyle]}
        >
          <Animated.Image
            resizeMode="contain"
            fadeDuration={0}
            style={[styles.image, imageStyle]}
            onLoadEnd={onImageLoaded}
            source={require('@assets/splash.png')}
          />
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: '100%' }
})
