import { connect } from 'react-redux';
import AddMaterialInput from '../components/AddMaterialInput';
import { addMaterial } from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  addMaterial: (val1,val2)=> {
    dispatch(addMaterial({source:val1,amount:val2}));
  }
});

const AddMaterialInputPackage= connect(mapStateToProps, mapDispatchToProps)(AddMaterialInput);

export default AddMaterialInputPackage;
                                                      