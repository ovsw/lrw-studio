import {FaDollarSign} from 'react-icons/fa'

export default {
  name: 'datesRatesLinks',
  type: 'object',
  title: 'Dates & Rates Links',
  icon: FaDollarSign,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    // select: {
    //   title: 'title'
    // }
    prepare () {
      return {
        title: 'Dates & Rates Links'
      }
    }
  }
}
