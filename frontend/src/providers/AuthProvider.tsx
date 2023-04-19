import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './ProtectedRoute.interface'

const DynamicRoleCheck = dynamic(() => import('./CheckRole'), {
  ssr: false
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children
}) => {
  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicRoleCheck Component={{ isOnlyUser }}>{children}</DynamicRoleCheck>
  )
}
