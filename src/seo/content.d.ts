declare module 'virtual:content-meta' {
  const metadata: Record<string, { title: string; description: string; noindex?: boolean }>;
  export default metadata;
}
