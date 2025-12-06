import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
console.log('Loading env from:', envPath);
const result = dotenv.config({ path: envPath });
console.log('Dotenv result:', result.error ? result.error : 'Success');
console.log('PROJECT_ID after load:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

async function verifySanityFetch() {
    // Dynamic imports to ensure env vars are loaded first
    const { fetchBlogPosts } = await import('./lib/blog');

    console.log('Verifying Sanity Fetch...');

    try {
        // Check environment variables
        console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'Set' : 'Missing');
        console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET ? 'Set' : 'Missing');

        const posts = await fetchBlogPosts();
        console.log(`Fetched ${posts.length} posts.`);

        if (posts.length > 0) {
            const firstPost = posts[0];
            console.log('First Post Title:', firstPost.title);
            console.log('First Post Author:', JSON.stringify(firstPost.authors, null, 2));

            if (firstPost.authors && firstPost.authors.length > 0 && firstPost.authors[0].name) {
                console.log('SUCCESS: Author data fetched correctly.');
            } else {
                console.log('WARNING: Author data might be missing or malformed.');
            }
        } else {
            console.log('No posts found. This might be expected if the dataset is empty.');
        }

    } catch (error) {
        console.error('Verification Failed:', error);
        process.exit(1);
    }
}

verifySanityFetch();
