import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-xl md:text-6xl font-bold text-center w-full pt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    ul: ({ children }) => (
      <ul className="flex flex-col gap-4 text-xl">{children}</ul>
    ),
    p: ({ children }) => <p className="text-xl italic mt-4">{children}</p>,
    ...components,
  };
}
