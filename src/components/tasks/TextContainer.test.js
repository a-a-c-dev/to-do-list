import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { TextContainer } from './TextContainer';

describe('TextContainer', () => {
  test('should render the task name with a line-through style if isCompleted is true', () => {
    render(<TextContainer index={0} taskName="clean your room" isCompleted={true} />);
    const counterElement = screen.getByText(/1\./i);
    const textElement = screen.getByText(/clean your room/i);
    expect(counterElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('clean your room');
    expect(textElement).toHaveStyle('text-decoration: line-through');
  });
});