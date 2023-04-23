import Subscriptions from '../components/pages/Subscriptions/Subscriptions'
import { NextPageAuth } from '../providers/ProtectedRoute.interface'

const SubscriptionsPage: NextPageAuth = () => {
  return <Subscriptions></Subscriptions>
}

SubscriptionsPage.isOnlyUser = true

export default SubscriptionsPage
