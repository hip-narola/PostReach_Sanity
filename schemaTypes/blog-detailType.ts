import {defineField, defineType} from 'sanity'

export const blogDetailType = defineType({
  name: 'blog_detail',
  title: 'Blog Detail',
  type: 'document',
  fields: [
    defineField({
        name: 'blog_id',
        title: 'Blog',
        type: 'reference',
        to: [{type: 'blog'}], 
        validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true }, // Allow cropping and focus point
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})