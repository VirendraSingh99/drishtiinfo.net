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
    date: null,
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
    }
  };

  return (
    <div className="w-screen pt-[90px] bg-white">
      {/* ================= HERO SECTION ================= */}
      <div className="bg-red-500 text-white py-18 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Book Your Free Software Demo
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Explore how our powerful software solutions can help your business
            grow faster, smarter and more securely.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="min-h-[calc(100vh-90px)] grid md:grid-cols-2">
        {/* 🔴 LEFT INFO */}
        <div className="bg-white flex items-center">
          <div className="max-w-md ml-24 py-20">
            {/* LOGO */}
            <img
              src="./logo1.png"
              alt="Drishti Infotech"
              className="mb-8 h-18 w-18"
            />

            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We build scalable, secure and business-ready software solutions
              designed to meet your exact requirements.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li> CRM / ERP / MLM Solutions</li>
              <li> Custom Software Development</li>
              <li> Cloud-Ready & Secure Systems</li>
              <li> Long-Term Support & Maintenance</li>
            </ul>
          </div>
        </div>

        {/* ⚪ RIGHT FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="bg-white flex items-center justify-center"
          sx={{ px: 3 }}
        >
          <div className="w-full max-w-lg py-14">
            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Book Free Demo
            </h2>
            <p className="text-gray-600 text-sm mb-10">
              Fill the form and our expert will contact you shortly
            </p>

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField
                size="small"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
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
                required
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
                required
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

            {/* DATE + SOFTWARE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Preferred Demo Date"
                  value={formData.date}
                  onChange={(newValue) =>
                    setFormData({ ...formData, date: newValue })
                  }
                  disablePast
                  desktopModeMediaQuery="(min-width: 0px)"
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
                required
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
              sx={{ mt: 4 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 6,
                py: 1.4,
                backgroundColor: "#dc2626",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#b91c1c",
                },
              }}
            >
              Book Demo
            </Button>
          </div>
        </Box>
      </div>

      {/* ================= RELATED SECTION ================= */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-red-600 mb-6">
            Trusted by Growing Businesses
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">🚀 Fast Deployment</h4>
              <p className="text-sm">
                Get your software up and running quickly with expert guidance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🔒 Secure Systems</h4>
              <p className="text-sm">
                Enterprise-grade security built into every solution.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">💡 Expert Support</h4>
              <p className="text-sm">
                Dedicated technical support whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
