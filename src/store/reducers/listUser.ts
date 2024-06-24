import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number
    name: string;
    status: boolean;
}

const listUser: User[] = [
    {
        id: 1,
        name: "Nguyễn Thanh Tùng",
        status: true,
    },
    {
        id: 2,
        name: "Lê Hùng Minh",
        status: true,
    },
    {
        id: 3,
        name: "Nguyễn Tiến Thịnh",
        status: false,
    },
    {
        id: 4,
        name: "Dương Sỹ Hiệp",
        status: false,
    },
];

const listUserReducer = createSlice({
    name: "listUserReducer",
    initialState: listUser,
    reducers: {
        showListUser: (state) => state,
        toggleUserStatus: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state[index].status = !state[index].status;
        },
    },
});

export const { showListUser, toggleUserStatus } = listUserReducer.actions;
export default listUserReducer.reducer;