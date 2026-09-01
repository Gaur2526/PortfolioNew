import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMeta = {
  title: string;
  date: string;
  description: string;
  read_time: string;
  tags?: string[];
  cover_image?: string;
};

export type Blog = BlogMeta & {
  slug: string;
};

export type BlogContent = {
  frontmatter: BlogMeta;
  content: string;
};

const blogsDir = path.join(process.cwd(), "content/blogs");

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(blogsDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(blogsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      ...(data as BlogMeta),
      slug,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogContent {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as BlogContent["frontmatter"],
    content,
  };
}