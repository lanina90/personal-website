import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  component: keyof JSX.IntrinsicElements
}

const Container: FC<ContainerProps> = ({
  component,
  children,
  className = '',
  ...props
}) => {
  const Component = component
  return <Component className={`container ${className}`} {...props}>{children}</Component>
}

export default Container
