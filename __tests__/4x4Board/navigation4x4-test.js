import React from 'react';
import HomeScreen from '../../src/screens/stackScreens/HomeScreen';
import { render, fireEvent } from "@testing-library/react-native";

describe("Go to 4x4 Game", () => {
    it("Navigates on button press", () => {
        const push = jest.fn();
        const { getByTestId } = render(<HomeScreen navigation={{ push }} />);
        const button = getByTestId("4x4");
        fireEvent.press(button);
        expect(push).toHaveBeenCalledWith('Game4', 'X');
    });
});