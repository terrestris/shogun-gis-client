import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';

export type Legal = {
  contact?: string;
  imprint?: string;
  privacy?: string;
};

const initialState: Legal = {
  contact: 'https://www.terrestris.de/de/kontakt/',
  imprint: 'https://www.terrestris.de/de/impressum/',
  privacy: 'https://www.terrestris.de/de/datenschutzerklaerung/'
};

export const slice = createSlice({
  name: 'legal',
  initialState,
  reducers: {
    setLegal: (state, action: PayloadAction<Legal>) => {
      return {
        contact: action.payload.contact ?? initialState.contact,
        imprint: action.payload.imprint ?? initialState.imprint,
        privacy: action.payload.privacy ?? initialState.privacy
      };
    }
  }
});

export const { setLegal } = slice.actions;

export default slice.reducer;
