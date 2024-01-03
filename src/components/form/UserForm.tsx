import React, { ChangeEvent, FormEvent, useState } from "react";

type FormValues = {
  name: string;
  surname: string;
};
/**
 * @description UserForm is a registration form for users.
 * @parameters   - Takes form parameters 'name' and 'surname'
 *   - 'avatar' is of type File
 */
const UserForm: React.FC = () => {
  const [form, setForm] = useState<FormValues>({
    name: "",
    surname: "",
  });

  const [avatar, setAvatar] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAvatar(file || null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form values:", form);
    console.log("Avatar:", avatar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={form.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="file">File</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;



