const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const withBase = (path) => {
  if (!path || typeof path !== 'string') return path;
  if (!path.startsWith('/')) return path;
  return `${basePath}${path}`;
};
