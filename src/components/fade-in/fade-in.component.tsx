import { animated, useSpring } from '@react-spring/web'

type FadeInProps = {
  isVisible: boolean
} & React.HTMLAttributes<HTMLDivElement>

const FadeIn: React.FC<FadeInProps> = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 20 : 0,
  })

  return <animated.div style={styles}>{children}</animated.div>
}

export default FadeIn
