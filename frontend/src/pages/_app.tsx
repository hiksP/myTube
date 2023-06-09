import { Provider } from 'react-redux'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { persistor, store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import ReduxToastrLib from 'react-redux-toastr'
import NextProgressBar from 'nextjs-progressbar'
import AuthProvider from '../providers/AuthProvider'
import { TypeComponentAuthFields } from '../providers/ProtectedRoute.interface'
import { QueryClient, QueryClientProvider } from 'react-query'

type TypeAppProps = AppProps & TypeComponentAuthFields

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextProgressBar
        color='#ac231c'
        startPosition={0.25}
        stopDelayMs={300}
        height={4}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider Component={Component}>
            <Component {...pageProps} />
            <ReduxToastrLib
              newestOnTop={false}
              preventDuplicates
              progressBar
              closeOnToastrClick
              timeOut={5500}
              transitionIn='fadeIn'
              transitionOut='fadeOut'
            />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
