import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookCard } from './book-card';

describe('BookCard Component', () => {
  const mockBookProps = {
    title: 'Mathematics Class 10',
    description: 'Complete mathematics guide for class 10 students',
    category: 'Mathematics',
    downloadUrl: 'https://example.com/download',
  };

  it('renders book card with title and description', () => {
    render(<BookCard {...mockBookProps} />);
    expect(screen.getByText('Mathematics Class 10')).toBeInTheDocument();
    expect(screen.getByText(/Complete mathematics guide/i)).toBeInTheDocument();
  });

  it('displays category badge', () => {
    render(<BookCard {...mockBookProps} />);
    expect(screen.getByText('Mathematics')).toBeInTheDocument();
  });

  it('renders placeholder icon when isPlaceholder is true', () => {
    render(<BookCard {...mockBookProps} isPlaceholder={true} />);
    const icons = screen.getAllByTestId('lucide-book-open');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('opens download URL in new tab when clicked', async () => {
    const user = userEvent.setup();
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<BookCard {...mockBookProps} />);
    await user.click(screen.getByRole('button', { name: /open source/i }));

    expect(windowOpenSpy).toHaveBeenCalledWith(mockBookProps.downloadUrl, '_blank', 'noopener,noreferrer');
    windowOpenSpy.mockRestore();
  });

  it('calls custom onClick handler when provided', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<BookCard {...mockBookProps} onClick={handleClick} />);
    await user.click(screen.getByRole('button', { name: /open source/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const { container } = render(
      <BookCard {...mockBookProps} className="custom-class" />
    );
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('renders without rating and downloads', () => {
    const minimalProps = {
      title: 'Test Book',
      description: 'Test Description',
      category: 'Science',
    };
    render(<BookCard {...minimalProps} />);
    expect(screen.getByText('Test Book')).toBeInTheDocument();
  });
});
