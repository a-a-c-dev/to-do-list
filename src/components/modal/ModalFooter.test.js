import React from 'react';
import { render,screen ,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import { ModalFooter } from './ModalFooter';

describe('ModalFooter', () => {
  test('chceck if the button is clickable', () => {
    const closeModal = jest.fn();
    render(<ModalFooter closeModal={closeModal} />);
    const closeElement = screen.getByRole('button', { name: /Close/i});
    const addElement = screen.getByRole('button', {name: /Add task/i});
    fireEvent.click(closeElement)
    expect(closeModal).toHaveBeenCalledTimes(1);
    expect(addElement).toHaveAttribute('type','submit')

  });
});