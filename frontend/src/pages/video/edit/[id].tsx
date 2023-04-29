import VideoEdit from '../../../components/pages/VideoEdit/VideoEdit'
import { NextPageAuth } from '../../../providers/ProtectedRoute.interface'

const VideoEditPage: NextPageAuth = () => {
  return <VideoEdit></VideoEdit>
}

VideoEditPage.isOnlyUser = true

export default VideoEditPage
