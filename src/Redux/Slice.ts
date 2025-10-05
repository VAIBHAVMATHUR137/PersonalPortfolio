import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface modal {
  skillModal:boolean,
  contactModal:boolean
}
const initialModalState: modal = {
  skillModal:false,
  contactModal:false
};
export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: initialModalState,
  reducers: {
    modalReducer: (state:modal, action: PayloadAction<{field:keyof modal, value:boolean}>) => {
         state[action.payload.field]=action.payload.value
    },
  },
});
export const { modalReducer } = modalSlice.actions;
export const modal = modalSlice.reducer;

interface Skills {
  skills: string[];
}
const initialSkill: Skills = {
  skills: [
    "TypeScript",
    "JavaScript",
    "ReactJS",
    "Redux",
    "TailwindCSS",
    "ShadCN",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "JWT Auth",
    "RESTful",
    "Redis",
    "Github",
  ],
};

export const skillSlice = createSlice({
  name: "skillSlice",
  initialState: initialSkill,
  reducers: {},
});
export const skillReducer = skillSlice.reducer;
