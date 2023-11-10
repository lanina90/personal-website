import React, {FC, ReactNode} from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  component: keyof JSX.IntrinsicElements
  id?: string;
}

const Container: FC<ContainerProps> = ({
  component,
  children,
  className = '',
  id,
  ...props
}) => {
  const Component = component
  return <Component className={`container ${className}`} id={id} {...props}>{children}</Component>
}

export default Container
