import Studio from '../components/pages/Studio/Studio'
import { NextPageAuth } from '../providers/ProtectedRoute.interface'

const StudioPage: NextPageAuth = () => {
  return <Studio></Studio>
}

StudioPage.isOnlyUser = true

export default StudioPage
