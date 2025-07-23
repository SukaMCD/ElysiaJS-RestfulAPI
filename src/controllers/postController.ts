//import prisma client
import prisma from '../../prisma/client';

export async function getPosts() {
    try {
        const posts = await prisma.post.findMany({ orderBy: { id: 'desc' } });
        return {
            success: true,
            message: "Posts retrieved successfully",
            data: posts
        };
    }   catch (e: unknown) {
        console.error(`Error retrieving posts: ${e}`);
    }
}

//Create a new post
export async function createPost(option: { title: string; content: string }) {
    try {
        const post = await prisma.post.create({
            data: {
                title: option.title,
                content: option.content
            }
        });
        return {
            success: true,
            message: "Post created successfully",
            data: post
        };
    } catch (e: unknown) {
        console.error(`Error creating post: ${e}`);
    }
}