import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';


const Contact = () => {
  const [statusMessage, setStatusMessage] = useState(''); // State to store status messages

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send Data to the Mail
    const mailData = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(`${apiUrl}/api/send-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mailData),
      });

      if (response.ok) {
        setStatusMessage('Email sent successfully!'); // Show success message
        e.target.reset(); // Reset the form fields
      } else {
        setStatusMessage('Failed to send the email. Please try again.'); // Show error message
      }
    } catch (error) {
      setStatusMessage('An error occurred while sending the email.'); // Handle network or other errors
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 my-7 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Contact With Me
      </motion.h4>

      <motion.h1
        className="text-center mb-2 text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I'd love to hear from you! <br /> If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        id="Form"
        className="max-w-2xl mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#dcd9d9] dark:text-black"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#dcd9d9] dark:text-black"
            id="email"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#dcd9d9] dark:text-black"
          id="message"
          name="message"
        ></motion.textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border border-gray-100"
        >
          Submit Now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
      </motion.form>

      {/* Status message */}
      {statusMessage && (
        <motion.p
          className={`text-center max-w-2xl mx-auto mb-6 p-4 rounded-md mt-3 ${
            statusMessage.includes('successfully')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {statusMessage}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Contact;
