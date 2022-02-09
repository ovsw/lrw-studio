import { FaCode } from 'react-icons/fa'

export default {
  name: 'faqBlock',
  type: 'object',
  title: 'FAQs List',
  icon: FaCode,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'faqItems',
      title: 'Questions and Answers:',
      description: 'Select which Questions and Answers you want to show in this list.',
      validation: Rule => [
        Rule.error('Must have at least one FAQ.').required(),
        Rule.error('Duplicate FAQ Item').unique()
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faqItem' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
