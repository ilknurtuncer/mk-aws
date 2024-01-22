import { useState } from "react";

const Contact = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    
    // Form submit işleminden sonra sayfayı yönlendir
    onSubmit(); // AppRouter component'inden gelen onSubmit prop'u çağrılır
  };

  

  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <div className="container mx-auto my-8">
      <h1 className="text-center mt-4 text-2xl font-bold">CONTACT FORM</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            id="username"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            id="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="mt-1 p-2 w-full border rounded-md"
            id="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>
        <div className="text-center">
          <button className="bg-red-500 text-white p-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;

