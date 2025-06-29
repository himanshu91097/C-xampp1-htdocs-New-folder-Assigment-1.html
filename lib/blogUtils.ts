import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'data/posts.json');

export async function getAllPosts() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Failed to read posts.json:', err);
        return [];
    }
}