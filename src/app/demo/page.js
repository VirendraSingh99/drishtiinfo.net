"use client";

import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: null, // ✅ NO AUTO DATE
    software: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required";
    temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Enter valid email";
    temp.phone = /^[0-9]{10}$/.test(formData.phone)
      ? ""
      : "Enter 10 digit phone number";
    temp.software = formData.software ? "" : "Select software";
    temp.date = formData.date ? "" : "Select demo date";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Demo Request:", formData);
      alert("Demo request submitted successfully!");

      // ✅ RESET FORM (date also cleared)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: null,
        software: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full bg-white pt-[90px]">
      {/* ================= HERO SECTION ================= */}
      <div className="bg-red-500 text-white py-16 px-4 sm:px-6 lg:px-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Book Your Free Software Demo
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
            Explore how our powerful software solutions can help your business
            grow faster, smarter and more securely.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 gap-6 mt-8">
        {/* 🔴 LEFT INFO */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-6">
          <div className="max-w-md text-left">
            <img
              src="./logo1.png"
              alt="Drishti Infotech"
              className="mb-6 h-18 w-18"
            />
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Drishti Infotech, we craft scalable and secure software
              solutions that empower businesses to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>Streamline operations with CRM, ERP, and MLM software.</li>
              <li>
                Get custom-built software tailored to your business needs.
              </li>
              <li>Cloud-ready systems ensuring security and reliability.</li>
              <li>Long-term support & maintenance.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Save time, reduce cost and focus on growth.
            </p>
          </div>
        </div>

        {/* ⚪ RIGHT FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white flex items-center justify-center p-6"
        >
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold text-red-600 mb-2 text-center">
              Book Free Demo
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Fill the form and our expert will contact you shortly
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                size="small"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.name)}
                helperText={errors.name}
              />

              <TextField
                size="small"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              <TextField
                size="small"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />

              <TextField
                size="small"
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Preferred Demo Date"
                  value={formData.date}
                  onChange={(newValue) =>
                    setFormData({ ...formData, date: newValue })
                  }
                  disablePast
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                      error: Boolean(errors.date),
                      helperText: errors.date,
                    },
                  }}
                />
              </LocalizationProvider>

              <TextField
                size="small"
                select
                label="Software Required"
                name="software"
                value={formData.software}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.software)}
                helperText={errors.software}
              >
                <MenuItem value="CRM">Travel CRM Software</MenuItem>
                <MenuItem value="ERP">Task Management Software</MenuItem>
                <MenuItem value="MLM">MLM Software</MenuItem>
                <MenuItem value="HR">HRMS Management</MenuItem>
                <MenuItem value="Custom">
                  Payment Orchestration Software
                </MenuItem>
              </TextField>
            </div>

            <TextField
              size="small"
              label="Describe Your Requirements"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={{ mt: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 4,
                py: 1.5,
                backgroundColor: "#dc2626",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#b91c1c" },
              }}
            >
              Book Demo
            </Button>
          </div>
        </Box>
      </div>
      {/* ================= RELATED SECTION ================= */}
      <div className="relative w-full bg-gray-50">
        {/* ===== Background Image ===== */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?cs=srgb&dl=pexels-olly-927022.jpg&fm=jpg"
            alt="Trusted Businesses Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== Content ===== */}
        <div className="relative max-w-4xl mx-auto text-center py-32 px-4 sm:px-6 lg:px-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-500 mb-6 drop-shadow-lg">
            Trusted by Growing Businesses
          </h2>
          <p className="text-white text-lg sm:text-xl drop-shadow-md">
            Companies rely on our software solutions to grow smarter, faster,
            and more securely. Our tools are designed to streamline operations
            and empower teams to achieve more.
          </p>
        </div>
      </div>
    </div>
  );
}
