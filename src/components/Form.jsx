import React, { useState } from "react";
import axios from "axios";

function Form({ Courses }) {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    university: null,
    university_level: null,
    course: null,
  });

  const [Message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fake-form.onrender.com/api/students/addStudent",
        {
          ...formData,
        }
      );
      console.log("Success:", response.data);
      setMessage("Form submitted successfully");
    } catch (error) {
      console.log("Error: ", error);
      if (error.response) {
        setMessage(`${error.response.data.message}`);
      } else setMessage("Failed to submit the form");
    }
  };

  return (
    <div className="Main flex flex-col items-center w-full justify-center my-24">
      <div className="caution">
        <h3 className="font-bold text-xl flex flex-col items-center">
          Cautions
        </h3>
        <p className="mt-4 text-lg max-md:text-center mx-1">
          Be sure to check your E-mail after submitting the form!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-lg mt-8 w-[40%] max-md:w-[85%]"
      >
        <div className="Name flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full"
            required
          />
        </div>
        <div className="Email mt-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full"
            required
          />
        </div>
        <div className="Phone mt-4 flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full"
            required
          />
        </div>
        <div className="University mt-4">
          <label htmlFor="university">University</label>
          <select
            name="university"
            id="university"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full p-2"
            required
          >
            <option value="" disabled selected>
              Select an option:
            </option>
            <option value="Cairo">Cairo</option>
            <option value="Ain Shams">Ain Shams</option>
            <option value="Helwan">Helwan</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="Level mt-4">
          <label htmlFor="university_level">University Level</label>
          <select
            name="university_level"
            id="university_level"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full p-2"
            required
          >
            <option value="" disabled selected>
              Select an option:
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="Courses mt-4">
          <label htmlFor="course">Courses</label>
          <select
            name="course"
            id="course"
            onChange={handleChange}
            className="border border-gray-200 h-[40px] w-full p-2"
            required
          >
            <option value="" disabled selected>
              Select an option:
            </option>
            {Courses.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        {Message && (
          <p className="text-[#700608] font-bold text-xl text-center mt-2">
            {Message}
          </p>
        )}
        <input
          type="submit"
          className="w-full p-2 bg-[#700608] text-white mt-8 hover:bg-[#222222]"
        ></input>
      </form>
    </div>
  );
}

export default Form;
