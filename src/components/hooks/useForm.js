  import {useState} from 'react';

  const useForm = (callback) => {
    
  const [item, setItem] = useState({difficulty:"1"})

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback.handleSubmit(item);
    const tempItem = {difficulty:"1"};
    setItem(tempItem);
  };
  return [item, handleInputChange, handleSubmit]
}

export default useForm;