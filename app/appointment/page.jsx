"use client"
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion } from 'framer-motion';
import Image from '@node_modules/next/image';

const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: undefined,
    time: '',
    name: '',
    email: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section>
    {/* Header section with background */}
    <div className="relative h-[60vh] w-full">
      <Image 
        src="/assets/images/Appointmentbackground.webp" 
        alt="Spa background" 
        layout="fill" 
        // objectFit="cover" 
        objectPosition="50% 85%" 
        className=""
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center pt-10">Book Appointment</h1>
      </div>
    </div>

    {/* Booking form section */}
    <div className=" flex flex-col items-center justify-center px-4 py-12 bg-white text-black">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Choose a Service</h2>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select a service</option>
              <option value="massage">Massage</option>
              <option value="facial">Facial</option>
              <option value="body-treatment">Body Treatment</option>
            </select>
            <button onClick={nextStep} className="px-4 py-2 bg-black text-white rounded">Next</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Pick a Date</h2>
            <DayPicker
              mode="single"
              selected={formData.date}
              onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
              <button onClick={nextStep} className="px-4 py-2 bg-black text-white rounded">Next</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Your Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
              <button onClick={nextStep} className="px-4 py-2 bg-black text-white rounded">Next</button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-2xl font-semibold">Confirm Appointment</h2>
            <p>Service: {formData.service}</p>
            <p>Date: {formData.date?.toLocaleDateString()}</p>
            <p>Time: {formData.time}</p>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <div className="flex justify-center gap-4">
              <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded">Confirm</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>  );
};

export default AppointmentForm;
