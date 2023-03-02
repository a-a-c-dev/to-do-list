import React from "react";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import {ModalInput}  from "./ModalInput";


describe('Modal input', ()=>{
    test("input element handle change is working", () => {
        const handleChange = jest.fn();
        render(<ModalInput newTaskValue="" handleChange={handleChange} />);
        const inputElement = screen.getByPlaceholderText(/New Task/i);
        userEvent.type(inputElement, "clean the room");
        expect(handleChange).toHaveBeenCalledWith("clean the room");
      });
      test('renders error message when errors prop is passed', () => {
        render(<ModalInput newTaskValue="" errors={{ textRequired: 'Text is required' }} />);
        const errorMessage = screen.getByText((content, element) => {
          const hasText = (node) => node.textContent === content;
          const nodeHasText = hasText(element);
          const childrenDontHaveText = Array.from(element.children).every((child) => !hasText(child));
          return nodeHasText && childrenDontHaveText;
        }, { selector: '.error' });
      
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Text is required');
      });
      test('renders error message when errors prop is passed', () => {
        render(<ModalInput newTaskValue="" errors={{ validText: 'Text is not valid' }} />);
          const errorMessage = screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === content;
            const nodeHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every((child) => !hasText(child));
            return nodeHasText && childrenDontHaveText;
        }, { selector: '.error' });

        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Text is not valid');
      });
});