import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ShareButton } from "@/components/share-button";
import { SkillIcon } from "@/components/skill-icon";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { frontmatter } = getBlogBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        ...(frontmatter.cover_image && { images: [{ url: frontmatter.cover_image }] }),
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
        ...(frontmatter.cover_image && { images: [frontmatter.cover_image] }),
      },
    };
  } catch (error) {
    return {
      title: "Blog Post",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  try {
    const { slug } = await params;
    const { frontmatter, content } = getBlogBySlug(slug);

    return (
      <main className="flex-grow flex flex-col w-full bg-background text-foreground">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24 flex-grow flex flex-col w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to writings
            </Link>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-foreground">
            {frontmatter.title}
          </h1>

          {/* Metadata & Share Row */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {frontmatter.date}
              </span>
              {frontmatter.read_time && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {frontmatter.read_time}
                  </span>
                </>
              )}
            </div>
            <ShareButton title={frontmatter.title} />
          </div>

          {/* Tag Badges */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 select-none">
              {frontmatter.tags.map((tag, i) => (
                <SkillIcon key={i} name={tag} />
              ))}
            </div>
          )}

          {/* Cover Logo Image */}
          {frontmatter.cover_image && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-border/40 shadow-xl">
              <Image 
                src={frontmatter.cover_image}
                alt={frontmatter.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          )}

          <article>
            <MDXRemote 
              source={content} 
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </article>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}

// ✅ Static generation
export function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}