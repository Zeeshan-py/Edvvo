// This file aggregates all books, notes, and resources for global search
import { books as class9Books } from '../pages/Explore/books/Class9Books';
import { books as class10Books } from '../pages/Explore/books/Class10Books';
import { books as class11Books } from '../pages/Explore/books/Class11Books';
import { books as class12Books } from '../pages/Explore/books/Class12Books';
import { categories as class9Notes } from '../pages/Explore/notes/Class9notes';
import { categories as class10Notes } from '../pages/Explore/notes/Class10notes';
import { categories as class11Notes } from '../pages/Explore/notes/Class11notes';
import { categories as class12Notes } from '../pages/Explore/notes/Class12notes';
import { categories as scholarlyVaultCategories } from '../pages/Explore/ScholarlyVault';

// Helper to flatten notes/resources
function flattenCategories(categories) {
  return categories.flatMap(cat =>
    (cat.resources || []).map(resource => ({
      ...resource,
      subject: cat.title,
      category: cat.title,
    }))
  );
}

const allBooks = [
  ...(class9Books || []),
  ...(class10Books || []),
  ...(class11Books || []),
  ...(class12Books || []),
];

const allNotes = [
  ...flattenCategories(class9Notes || []),
  ...flattenCategories(class10Notes || []),
  ...flattenCategories(class11Notes || []),
  ...flattenCategories(class12Notes || []),
];

const allVault = flattenCategories(scholarlyVaultCategories || []);

const globalResources = [
  ...allBooks.map(book => ({
    id: book.id,
    title: book.title,
    description: book.description,
    subject: book.subject,
    tags: book.tags,
    downloadUrl: book.downloadUrl,
    type: 'Book',
  })),
  ...allNotes.map(note => ({
    id: note.id,
    title: note.title,
    description: note.description,
    subject: note.subject,
    tags: note.tags,
    downloadLink: note.downloadLink,
    type: 'Note',
  })),
  ...allVault.map(resource => ({
    id: resource.id,
    title: resource.title,
    description: resource.description,
    subject: resource.subject,
    tags: resource.tags,
    downloadLink: resource.downloadLink,
    type: 'Vault',
  })),
];

export default globalResources; 