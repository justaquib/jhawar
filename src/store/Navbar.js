import React from "react";
import getNavBar  from "../api/Navbar";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';

let navBar = (set) => ({
    heading: 'Welcome to state manager',
    data: [],
    isLoading: false,
    error: null,
    getData: async() => {
        set({ isLoading: true });
        try {
          set({ isLoading: true });
          const response = await getNavBar();
          set({ isLoading: false, data: response.data });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
    navBar: [
        {
            id: 1,
            name: 'Dashboard',
            icon: 'Squares2X2Icon',
        },
        {
            id: 2,
            name: 'Expense',
            icon: 'Squares2X2Icon',
        },
        {
            id: 3,
            name: 'Split Bills',
            icon: 'Squares2X2Icon',
        }
    ],
})

navBar = devtools(navBar);

export const useNavbarStore = create(navBar);