
const defaultState = {
  items: [],
};

const example = (state = defaultState, action) => {

  switch (action.type) {

    case 'getData':
      return Object.assign({}, state, {
        ...action.data,
      });

    case 'handleEvent':
      return state;

    default:
      return state;

  }

};

export default example;
