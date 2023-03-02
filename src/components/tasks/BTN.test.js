import React from 'react';
import { render,screen ,fireEvent} from "@testing-library/react";

import { BTN } from "./BTN";


test('btn component', () => {
    const handlerFunction = jest.fn();
    render(<BTN handlerFunction={handlerFunction}/>);
    const buttonElement = screen.getByRole('btn');
    fireEvent.click(buttonElement);
    expect(handlerFunction).toHaveBeenCalledTimes(1);
})