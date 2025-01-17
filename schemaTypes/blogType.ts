import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
        name: 'category_id',
        title: 'Category',
        type: 'reference',
        to: [{type: 'category'}], // Referencing the `category` schema
        validation: (rule) => rule.required(), // Ensure a category is selected
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'description',
        title:'Blog Detail',
        type: 'text',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'blog_image',
        type: 'image',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'author_name',
        title : 'Author Name',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'author_image_url',
        title:'Author Profile Image',
        type: 'image',
    }),
    defineField({
        name: 'quote_description',
        title:'Quote',
        type: 'text'
    }),
    defineField({
        name: 'quote_author_name',
        title : 'Quote Author Name',
        type: 'string'
    }),
    defineField({
        name: 'quote_author_image_url',
        title:'Quote Author Profile Image',
        type: 'image',
    }),

    defineField({
        name: 'quote_author_designation',
        title:'Quote Author Designation',
        type: 'string'
    }),
    defineField({
        name: 'is_featured',
        type: 'boolean'
    }),
    defineField({
        name: 'is_recommended',
        type: 'boolean'
    }),
  ],
})