import { Fragment } from "react/jsx-runtime";

interface AddressBook {
  id: number;
  name:string;
  value:string;
}

interface EditAddressProps {
  addressBook : AddressBook[];
  handdleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditAddress({addressBook, handdleAddressChange}:EditAddressProps){
  const list = addressBook.map(address => {
    return(
      <Fragment key = {address.id}>
        <label htmlFor={address.id.toString()}>{address.name}</label>
        <input id={address.id.toString()} type="text" name={address.id.toString()}
        value={address.value}  onChange={ handdleAddressChange }/>
        <br/>
      </Fragment>
    )
  });
  return list;
}

export default EditAddress