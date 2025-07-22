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