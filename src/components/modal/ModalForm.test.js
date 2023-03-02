import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';


const fieldIsValid =  (value) => {
    const errors = {};
    const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
    if (!value) errors.textRequired = "* Text is required, please insert text";
    if (!value.match(textPattern)) errors.validText = "* Please insert text in English or numbers";
    return Object.keys(errors).length === 0
}


describe('fieldIsValid', () => {
    test('returns true if input is valid', () => {
      const input = 'Valid input';
      const result = fieldIsValid(input);
      expect(result).toBe(true);
    });
  
    test('returns false if input is empty', () => {
      const input = '';
      const result = fieldIsValid(input);
      expect(result).toBe(false);
    });
  
    test('returns false if input contains invalid characters', () => {
      const input = 'Invalid input @#$%';
      const result = fieldIsValid(input);
      expect(result).toBe(false);
    });
  });
