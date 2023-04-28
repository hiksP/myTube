import { FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import styles from './VideoUpload.module.scss'
import { IUploadModal } from './VideoUpload.interface'
import UploadVideoForm from './VideoUploadForm/VideoUploadForm'

const VideoUploadPopup: FC<IUploadModal> = ({ setIsOpen, isOpen, videoId }) => {
  const handleCloseModal = () => setIsOpen(false)
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className={styles.modal} onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className={styles.overlay} />
        </Transition.Child>

        <div className={styles.wrapper}>
          <div>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className={styles.window}>
                <UploadVideoForm
                  videoId={videoId}
                  handleCloseModal={handleCloseModal}
                ></UploadVideoForm>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default VideoUploadPopup
