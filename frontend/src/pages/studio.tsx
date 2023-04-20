import { NextPageAuth } from '../providers/ProtectedRoute.interface'

const StudioPage: NextPageAuth = () => {
  return (
    <>
      <div>Studio</div>
    </>
  )
}

StudioPage.isOnlyUser = true

export default StudioPage
