import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './ProtectedRoute.interface'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component: { isOnlyUser }
}) => {
  const { isLoading, user } = useAuth()
  const { replace, pathname } = useRouter()

  const Children = () => <>{children}</>

  if (isLoading) return null

  if (user) return <Children></Children>

  if (isOnlyUser) pathname !== '/' && replace('/')

  return null
}

export default CheckRole
