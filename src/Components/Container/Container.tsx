import {type ReactNode} from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  component: keyof React.JSX.IntrinsicElements
  id?: string;
}

const Container = ({
  component,
  children,
  className = '',
  id,
  ...props
}: ContainerProps) => {
  const Component = component
  return <Component className={`container ${className}`} id={id} {...props}>{children}</Component>
}

export default Container
