import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GuideContent } from './GuideContent';

describe('GuideContent', () => {
  it('preserves code as text without interpreting HTML', () => {
    const { container } = render(<GuideContent content={'## Example\n```html\n<script>alert(1)</script>\n```'} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Example');
    expect(container.querySelector('pre code')?.textContent).toBe('<script>alert(1)</script>');
    expect(container.querySelector('script')).toBeNull();
  });
  it('groups numbered and bulleted items into semantic lists', () => {
    const { container } = render(<GuideContent content={'- First\n- Second\n\n1. Start\n2. Finish\n\nSummary'} />);
    expect(container.querySelectorAll('ul > li')).toHaveLength(2);
    expect(container.querySelectorAll('ol > li')).toHaveLength(2);
    expect(screen.getByText('Summary').tagName).toBe('P');
  });
});
