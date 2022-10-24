import React from 'react';
import HomeScreen from '../../src/screens/stackScreens/HomeScreen';
import { render, fireEvent } from "@testing-library/react-native";

describe("Go to 3x3 Game", () => {
    it("Navigates on button press", () => {
        const push = jest.fn();
        const { getByTestId } = render(<HomeScreen navigation={{ push }} />);
        const button = getByTestId("3x3");
        fireEvent.press(button);
        expect(push).toHaveBeenCalledWith('Game', 'X');
    });
});