
const materialUploaded = (state = [], action)=> {

  switch (action.type) {
  case 'ADD_MATERIAL':
    return [
      ...state,
      action.data
    ];
  case 'DELETE_MATERIAL':
    return state.filter((v, k)=> {
      return k !== action.id;
    });
  }
  return state;
};

export default materialUploaded;