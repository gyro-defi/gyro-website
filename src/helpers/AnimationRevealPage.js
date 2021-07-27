import React from 'react'

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from 'framer-motion'
import useInView from '@owaiswiz/use-in-view'

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>
  }

  if (!Array.isArray(children)) children = [children]

  const directions = ['left', 'right']
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    )
  })
  return <>{childrenWithAnimation}</>
}

function AnimatedSlideInComponent({ children }) {
  const [ref, inView] = useInView(30)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      {children}
    </motion.section>
  )
}

// eslint-disable-next-line
export default props => <AnimationReveal {...props} />
