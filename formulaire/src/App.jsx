import { useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import { Rating } from 'react-simple-star-rating'
import Select from './Components/Select/Select';

function App() {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("")
  const [comment, setComment] = useState("")
  const [file,setFile]= useState()

  function handleChangeFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  }

  handleChangeFile
  return (
    <div>
      <Input
        type="text"
        value={name}
        placeholder="Votre nom :"
        handleChange={handleName}
      />
      <div>

        <label>
          Rate  :
          <select name="selectedRating" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </label>

      </div>


      <div>
        <textarea
          value={comment}
          placeholder={"Write ur comment"}
          onChange={handleChangeComment}

        />
      </div>

      <div>
        <h2>Add image:</h2>
        <input type="file" onChange={handleChangeFile} />
        <img src={file} />
      </div>

    </div>





  )
}

export default App;
