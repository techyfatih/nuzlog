export const types = {
  NEW_GAME: 'New Game',
  NEW_LOCATION: 'Location',
  RECORD_LOG: 'Log',
  ADD_POKEMON: 'Add',
  EDIT_POKEMON: 'Edit',
  MOVE_POKEMON: 'Move',
  DEATH: 'Death'
};

export const newGame = (title, game, name, rules) => {
  return {
    type: types.NEW_GAME,
    title,
    game,
    name,
    rules
  };
};

const recordAction = (type, action) => {
  return {
    type,
    ...action,
    time: new Date()
  }
}

export const newLocation = location => {
  return recordAction(types.NEW_LOCATION, {location});
};

export const recordLog = log => {
  return recordAction(types.RECORD_LOG, {log});
};

export const addPokemon = pokemon => {
  return recordAction(types.ADD_POKEMON, {pokemon});
};

export const editPokemon = (pokemon, change) => {
  return recordAction(types.EDIT_POKEMON, {pokemon, change});
}

export const movePokemon = (party, pc) => {
  return recordAction(types.MOVE_POKEMON, {party, pc});
}

export const death = (index, cause) => {
  return recordAction(types.DEATH, {index, cause});
};