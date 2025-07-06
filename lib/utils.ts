import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct path for static assets based on the deployment environment
 * This ensures assets work both locally and on GitHub Pages
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In production (GitHub Pages), prepend the base path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
