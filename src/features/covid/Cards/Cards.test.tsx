import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import covidReducer from '../covidSlice';
import Cards from './Cards'

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let store: EnhancedStore<any>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        covid: covidReducer
      }
    })
  });
  it("Should render innerText", () => {
    render(<Provider store={store}>
      <Cards />
    </Provider>);
    expect(screen.getByText("Infected persons")).toBeTruthy();
    expect(screen.getByText("Recovered persons")).toBeTruthy();
    expect(screen.getByText("Dead persons")).toBeTruthy();
  })
})
