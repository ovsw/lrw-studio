// youtube.js
import React from 'react'
import getVideoId from 'get-video-id'
import {IoLogoVimeo} from 'react-icons/io'
import Vimeo from '@u-wave/react-vimeo'

const Preview = ({value}) => {
  console.log('************',value.url)
  if (value.url) {
    const {id, service} = getVideoId(value.url)
    if (service === 'vimeo') {
      return (<Vimeo video={id} className='fuuuuu' style={{textAlign: 'center', width: '100%'}} />)
    }
    else {
      return 'Invalid Vimeo URL'
    }
  }
  return ('')
}

export default {
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  icon: IoLogoVimeo,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Vimeo video URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
