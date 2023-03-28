import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from 'features/scrollSave';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
