import {defineField, defineType} from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'category_id',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}], // Referencing the category schema
      validation: (rule) => rule.required(), // Ensure a category is selected
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Blog Detail',
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
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author_image_url',
      title: 'Author Profile Image',
      type: 'image',
    }),
    defineField({
      name: 'quote_description',
      title: 'Quote',
      type: 'text',
    }),
    defineField({
      name: 'quote_author_name',
      title: 'Quote Author Name',
      type: 'string',
    }),
    defineField({
      name: 'quote_author_image_url',
      title: 'Quote Author Profile Image',
      type: 'image',
    }),
    defineField({
      name: 'quote_author_designation',
      title: 'Quote Author Designation',
      type: 'string',
    }),
    defineField({
      name: 'is_featured',
      type: 'boolean',
    }),
    defineField({
      name: 'is_recommended',
      type: 'boolean',
    }),
    //SEO fields
    defineField({
      name: "seo_title",
      title: "SEO Title",
      type: "string",
      description: "Title for search engines (Recommended: 50-60 characters)",
    }),
    defineField({
      name: "seo_description",
      title: "SEO Description",
      type: "text",
      description: "Meta description (Recommended: 150-160 characters)",
    }),
    defineField({
      name: "og_title",
      title: "Open Graph Title",
      type: "string",
      description: "Title for social media sharing",
    }),
    defineField({
      name: "og_description",
      title: "Open Graph Description",
      type: "text",
      description: "Description for social media sharing",
    }),
    defineField({
      name: "og_url",
      title: "Open Graph URL",
      type: "string",
      description: "URL for social media previews",
    }),

    defineField({
      name: "og_type",
      title: "Open Graph Type",
      type: "string",
      description: "",
    }),

    defineField({
      name: "og_site_name",
      title: "Open Graph Site Name",
      type: "string",
      description: "",
    }),
    defineField({
      name: "focus_keywords",
      title: "Focus Keywords",
      type: "string",
      description: "",
    }),
    defineField({
      name: "robots",
      title: "Robots",
      type: "string",
      description: "",
    }),

    defineField({
      name: "structured_data",
      title: "Structured Data",
      type: "text",
      description: "",
    }),
    // Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "You can add or generate slug of length 100",
      options: { 
        source: "title", 
        maxLength: 100,
        slugify: (input: string) => input
        .toLowerCase()
        .replace(/\s+/g, "-")  // Replace spaces with hyphens
        .slice(0, 100),         // Enforce max length
       },
      validation: (rule) => rule.required(),
    }),
  ],
});
