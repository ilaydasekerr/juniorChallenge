import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [forms, setForms] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newForm = {
      firstName,
      lastName,
      age,
      gender,
    };

    if (editMode) {
      const updatedForms = [...forms];
      updatedForms[editIndex] = newForm;
      setForms(updatedForms);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setForms([...forms, newForm]);
    }

    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
  };
  const handleUpdate = () => {
    const updatedForm = {
      firstName,
      lastName,
      age,
      gender,
    };
    const updatedForms = [...forms];
    updatedForms[editIndex] = updatedForm;
    setForms(updatedForms);
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setEditMode(false);
    setEditIndex(null);
  };
  const handleEdit = (index) => {
    const formToEdit = forms[index];
    setFirstName(formToEdit.firstName);
    setLastName(formToEdit.lastName);
    setAge(formToEdit.age);
    setGender(formToEdit.gender);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
  };

  return (
    <div className="hiza">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div>
              <label>
                First Name:
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
              </label>
            </div>
          </div>
          <div className="flex">
            <div>
              <label style={{ display: "flex", flexDirection: "column" }}>
                Age:
                <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
              </label>
            </div>
            <div>
              <label style={{ display: "flex", flexDirection: "column", paddingLeft: "60px" }}>
                Gender:
                <select placeholder="Gender" value={gender} onChange={handleGenderChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
          </div>
          <div className="submit">
            <input className="button" type="submit" value={editMode ? "Güncelle" : "Alan Ekle"} />
          </div>
          <div className="submit-2">
            <input className="button-2" type="submit" value="Kaydet" />
          </div>
        </form>
      </div>

      <div className="form-list">
        <h2>Eklenmiş Formlar</h2>
        <ul>
          {forms.map((form, index) => (
            <li key={index}>
              <strong>First Name:</strong> {form.firstName}, <strong>Last Name:</strong> {form.lastName},{" "}
              <strong>Age:</strong> {form.age}, <strong>Gender:</strong> {form.gender}
              <button onClick={() => handleEdit(index)}>Doldur</button>
              {editMode ? (
                <>
                  <button onClick={handleUpdate}>Güncelle</button>
                  <button onClick={() => setEditMode(false)}>İptal</button>
                </>
              ) : (
                <button onClick={() => handleEdit(index)}>Düzenle</button>
              )}
              <button onClick={() => handleDelete(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
