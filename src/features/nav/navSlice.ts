import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CorporateTab = "Courses" | "Lectures" | "Quizzes";

type NavState = {
  activeCorporateTab: CorporateTab;
  activeSidebarItem: string;
  isSideBarCollapsed: boolean;
};

const initialState: NavState = {
  activeCorporateTab: "Courses",
  activeSidebarItem: "treeStructure",
  isSideBarCollapsed: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveCopropateTab: (state, action: PayloadAction<CorporateTab>) => {
      state.activeCorporateTab = action.payload;
    },

    setActiveSidebarItem: (state, action: PayloadAction<string>) => {
      state.activeSidebarItem = action.payload;
    },

    toggleSidebar: (state) => {
      state.isSideBarCollapsed = !state.isSideBarCollapsed;
    },
  },
});

export const { setActiveCopropateTab, setActiveSidebarItem, toggleSidebar } =
  navSlice.actions;

export default navSlice.reducer;
