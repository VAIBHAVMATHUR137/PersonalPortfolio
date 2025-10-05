import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ContactInterface{
  Linkedin:string,
  ContactNumber:number,
  Email:string,
  X:string,
  Github:string,
  Location:string,
  Medium:string
}

const initialContactState:ContactInterface={
  Linkedin:"www.linkedin.com/in/vaibhav-mathur-a5415b350",
  ContactNumber:7060915581,
  Email:"Mathurvaibhav256@gmail.com",
  X:"@Mathur128",
  Github:"https://github.com/VAIBHAVMATHUR137",
  Location:"Ghaziabad, Uttar Pradesh, India",
  Medium:"https://medium.com/@vaibhavmathur128"
}

export const ContactSlice=createSlice({
  name:"ContactSlice",
  initialState:initialContactState,
  reducers:{}
})
export const ContactReducer=ContactSlice.reducer

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
