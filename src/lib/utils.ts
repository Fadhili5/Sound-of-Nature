import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and tailwind-merge
 * @param inputs - Class names to be combined
 * @returns Combined class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string to a more readable format
 * @param date - Date string to format
 * @returns Formatted date string
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Truncates a string to a specified length
 * @param str - String to truncate
 * @param length - Maximum length of the truncated string
 * @returns Truncated string
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

/**
 * Generates a random color in hexadecimal format
 * @returns Random color in hex format
 */
export function getRandomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

/**
 * Debounces a function
 * @param func - Function to debounce
 * @param wait - Time to wait before calling the function
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export interface Soundscape {
  id: number;
  name: string;
  audioUrl: string;
}

export async function fetchSoundscapes(): Promise<Soundscape[]> {
  const response = await fetch('/api/soundscape', {
    credentials: 'include',
  });
  
  if (response.status === 401) {
    throw new Error('Please sign in to view soundscapes');
  }
  
  if (!response.ok) {
    throw new Error('Failed to fetch soundscapes');
  }
  
  const data = await response.json();
  return data.soundscapes;
}

export async function createSoundscape(soundscape: Omit<Soundscape, 'id'>): Promise<void> {
  const response = await fetch('/api/soundscape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(soundscape),
  });
  
  if (response.status === 401) {
    throw new Error('Please sign in to create soundscapes');
  }
  
  if (!response.ok) {
    throw new Error('Failed to create soundscape');
  }
}

