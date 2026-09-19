import { beforeAll, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RoadmapsPage, roadmaps } from '@/pages/Workspace/RoadmapsPage';
import { pages, roadmapSchema } from '@/seo/site';
import { roadmapCatalog, roadmapUrl } from '@/data/roadmapCatalog';
import { professionalRoadmaps } from '@/data/professionalRoadmaps';

vi.mock('@/pages/Home/sections/HeroSection', () => ({ HeroSection: () => <header>Edvvo</header> }));
vi.mock('@/pages/Home/sections/FooterSection', () => ({ FooterSection: () => <footer>Edvvo</footer> }));
beforeAll(() => { Element.prototype.scrollIntoView = vi.fn(); });
function visit(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><Routes><Route path="/roadmaps" element={<RoadmapsPage />} /><Route path="/roadmaps/:slug" element={<RoadmapsPage />} /></Routes></MemoryRouter>);
}
describe('Learning roadmaps', () => {
  it.each(professionalRoadmaps)('shows prerequisites, deliverables and six complete stages for path $id', async roadmap => {
    visit(roadmapUrl(roadmap.id));
    expect(screen.getByText(roadmap.prerequisites)).toBeInTheDocument();
    expect(screen.getByText(roadmap.outcome)).toBeInTheDocument();
    expect(roadmap.steps).toHaveLength(6);
    for (const step of roadmap.steps) {
      expect(step.subtopics).toHaveLength(2);
      expect(step.resources.length).toBeGreaterThan(0);
      expect(step.resources.every(resource => new URL(resource.url).protocol === 'https:')).toBe(true);
    }
    await userEvent.selectOptions(screen.getByLabelText('Choose a step'), '5');
    expect(screen.getByRole('heading', { name: roadmap.steps[5].name })).toHaveFocus();
    expect(screen.getByRole('link', { name: 'All paths' })).toHaveAttribute('href', '/roadmaps');
  });
  it('gives every roadmap a unique indexable canonical path', () => {
    expect(roadmaps).toHaveLength(16);
    expect(new Set(roadmapCatalog.map(r => r.slug)).size).toBe(16);
    expect(new Set(roadmaps.map(r => r.id)).size).toBe(16);
    for (const roadmap of roadmaps) {
      expect(pages[roadmapUrl(roadmap.id)].description.length).toBeGreaterThan(50);
      expect(roadmapSchema(roadmapUrl(roadmap.id))?.itemListElement).toHaveLength(3);
      expect(roadmap.steps.length).toBeGreaterThanOrEqual(5);
    }
  });
  it('links all 16 paths from the directory', () => {
    visit('/roadmaps');
    for (const roadmap of roadmapCatalog) expect(document.querySelector(`a[href="${roadmapUrl(roadmap.id)}"]`)).not.toBeNull();
  });
  it('opens a new path and moves between its lessons', async () => {
    visit('/roadmaps/python-data-analysis');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Python & Data Analysis');
    await userEvent.click(screen.getByRole('button', { name: /Next step/ }));
    expect(screen.getByRole('heading', { name: 'Load and inspect a dataset' })).toHaveFocus();
    expect(screen.getByRole('link', { name: /pandas: getting started/ })).toHaveAttribute('href', 'https://pandas.pydata.org/docs/getting_started/index.html');
  });
  it('preserves legacy bookmarks and selected steps', () => {
    visit('/roadmaps?path=10&step=3');
    expect(screen.getByRole('heading', { name: 'Clean and validate' })).toBeInTheDocument();
  });
  it('recovers from an invalid step and rejects an unknown path', () => {
    const first = visit('/roadmaps/android-development?step=999');
    expect(screen.getByRole('heading', { name: 'Learn Kotlin foundations' })).toBeInTheDocument();
    first.unmount();
    visit('/roadmaps/not-a-path');
    expect(screen.queryByRole('heading', { name: 'A direction for your ambition.' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
