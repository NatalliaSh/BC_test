import { updateLoadState, updateData } from './charactersSlice.js';
import { setPagesInfo } from './settingsSlice.js';

export async function charactersDataLoad(
  dispatch,
  { resource, page, characterID },
) {
  try {
    dispatch(updateLoadState({ state: 1, error: null }));
    const response = page
      ? await fetch(`https://rickandmortyapi.com/api/${resource}/?page=${page}`)
      : characterID
      ? await fetch(
          `https://rickandmortyapi.com/api/${resource}/${characterID}`,
        )
      : await fetch(`https://rickandmortyapi.com/api/${resource}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(updateLoadState({ state: 2, error: null }));
      dispatch(updateData(data.results));
      dispatch(setPagesInfo(data.info.pages));
    } else {
      dispatch(
        updateLoadState({ state: 3, error: 'HTTP error ' + response.status }),
      );
    }
  } catch (err) {
    dispatch(updateLoadState({ state: 3, error: err.message }));
  }
}
