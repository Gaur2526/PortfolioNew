import { CodeBlock } from './code-block'

export const mdxComponents = {
  h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
  h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
  p: ({ children }: any) => <p className="text-base leading-7 mb-4">{children}</p>,
  ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }: any) => <li className="text-base">{children}</li>,
  code: ({ children, className }: any) => {
    // If it's inline code (className is language-js, etc, it means it's inside a pre)
    if (className) {
      return <code className="bg-muted cursor-pointer px-2 py-1 rounded font-mono text-sm">{children}</code>
    }
    // Inline code without language
    return <code className="bg-muted cursor-pointer px-2 py-1 rounded font-mono text-sm">{children}</code>
  },
  pre: ({ children }: any) => {
    // Extract code content from the code element
    const codeString = typeof children === 'string' 
      ? children 
      : children?.props?.children || ''
    
    return <CodeBlock>{codeString}</CodeBlock>
  },
  table: ({ children }: any) => (
    <div className="w-full overflow-x-auto my-8 rounded-xl border border-border/40 shadow-sm bg-secondary/5">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-muted/30">
      {children}
    </thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-border/20">
      {children}
    </tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-emerald-500/5 transition-colors duration-200">
      {children}
    </tr>
  ),
  th: ({ children }: any) => (
    <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider text-muted-foreground border-b border-border/40">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 text-sm text-foreground/90 leading-relaxed border-b border-border/10">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-border/40" />,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-emerald-500/80 bg-emerald-500/5 px-5 py-4 my-6 rounded-r-lg text-muted-foreground italic leading-relaxed">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: any) => (
    <a href={href} className="text-emerald-500 hover:text-emerald-400 underline decoration-emerald-500/30 hover:decoration-emerald-400 underline-offset-4 transition-all">
      {children}
    </a>
  ),
};
