import React from 'react';
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_in179n7", // Replace with your EmailJS service ID
        "template_nx2egyk", // Replace with your EmailJS template ID
        e.target,
        "k80r6Gx4vu0KqYE0q" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.error(error.text);
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Let's Connect</h2>
        <div className="max-w-xl mx-auto">
          <AnimatedText delay={200}>
            <div className="flex justify-center gap-8 mb-12">
              <a href="https://github.com/mirdanish6594" className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/danish-mir-767792202/" className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:mirdanish6594@gmail.com" className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </AnimatedText>

          <AnimatedText delay={400}>
            <GlassCard className="p-6">
              <form className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600/80 hover:bg-indigo-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
