import { IoIosImage } from 'react-icons/io'

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  icon: IoIosImage,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'link',
      type: 'string',
      title: 'Image Link (optional)',
      description:
        'if you want to have this image link to a page, paste the URL of that page here.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
