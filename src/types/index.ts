/**
 * Shared type definitions used across the application.
 */
import type React from "react";

/** Textbook resource for Class 9–12 book pages */
export interface Book {
  id: string;
  title: string;
  subject: string;
  description: string;
  author?: string;
  publisher?: string;
  edition?: string;
  isbn?: string;
  language: string;
  format: string;
  fileSize?: string;
  downloadUrl: string;
  previewAvailable?: boolean;
  rating?: number;
  downloads?: number;
  lastUpdated?: string;
  difficulty?: string;
  tags: string[];
  boardApproved?: boolean;
  curriculumAligned?: boolean;
}

/** Downloadable resource within a notes/vault category */
export interface Resource {
  id: string;
  title: string;
  description: string;
  format: string;
  downloadLink: string;
  previewAvailable: boolean;
  rating: number;
  downloads: number;
  difficulty: string;
  tags: string[];
}

/** Grouped category containing resources (notes, vault, etc.) */
export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgPattern: string;
  resourceCount: number;
  resources: Resource[];
}
