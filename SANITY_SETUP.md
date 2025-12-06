# Sanity Blog Integration Setup

This project now fetches blog posts from Sanity CMS.

## Configuration

The following environment variables are required in your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token (optional)
```

## Files Created

- **`lib/sanity.ts`** - Sanity client configuration and image URL builder
- **`lib/blog.ts`** - Blog data fetching utilities with Sanity queries

## How It Works

1. The blog page (`app/blogs/page.tsx`) now imports `fetchBlogPosts` from `lib/blog.ts`
2. This function queries your Sanity CMS for all posts of type `"post"`
3. Posts are automatically transformed to match the frontend `BlogPost` interface
4. Images are processed through Sanity's image URL builder for optimization

## Sanity Schema Requirements

Your Sanity schema should have a `post` document type with these fields:
- `title` (string)
- `slug` (slug)
- `description` (text)
- `publishedAt` (datetime)
- `author` (reference or array of references)
- `mainImage` (image)
- `content` (block content)
- `categories` (array of strings)
- `tags` (array of strings)

## Next Steps

1. Ensure your `.env.local` has the correct Sanity credentials
2. Make sure your Sanity project has blog posts published
3. Run your development server to see live data from Sanity
