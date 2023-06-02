import { Button, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookTicket = (props) => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const url = `https://api.tvmaze.com/shows/${id}`;
  const [currentData, setData] = useState({});
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  const formik = useFormik({
    initialValues: {
      name: localStorage.getItem("user_name"),
      phoneNo: localStorage.getItem("user_phoneNo"),
      email: localStorage.getItem("user_email"),
      date: "",
      time: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      localStorage.setItem("user_name", values.name);
      localStorage.setItem("user_email", values.email);
      localStorage.setItem("user_phoneNo", values.phoneNo);
      setloading(true);
    },
  });
  useEffect(() => {
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="form__container">
        <h1 className="section__title form__heading">Book Ticket</h1>
        <p className="section__subtitle form__subheading">
          Enter the details to book ticket for {currentData.name}
        </p>
        <div className="input__section">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              className="input__main"
              required={true}
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
            />
            <input
              type="email"
              placeholder="Email*"
              className="input__main"
              required={true}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
            <input
              type="tel"
              placeholder="Mobile Number*"
              className="input__main"
              onChange={formik.handleChange}
              required={true}
              value={formik.values.phoneNo}
              name="phoneNo"
            />
            <input
              type="time"
              className="input__main"
              onChange={formik.handleChange}
              value={currentData.schedule ? currentData.schedule.time : ""}
              required={true}
              name="time"
            />
            <select
              required={true}
              className="input__main"
              onChange={formik.handleChange}
              name="date"
            >
              {currentData.schedule &&
                currentData.schedule.days.map((object) => (
                  <option value={object} key={object}>
                    {object}
                  </option>
                ))}
            </select>
            <Button
              variant="contained"
              type="submit"
              sx={{
                minWidth: "10rem",
                minHeight: "2.5rem",
              }}
            >
              {loading && (
                <CircularProgress size={20} sx={{ color: "black" }} />
              )}
              {!loading && <p>Book Ticket</p>}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
