import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const GetDemo = () => {
  const [state, handleSubmit] = useForm("meognrgo");

  if (state.succeeded) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Thank you!</h1>
          <p className="text-gray-600">Your submission has been received. We will contact you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">Let's talk. Get a personalised demo.</h1>
        <p className="text-gray-600 text-center mb-8">See how SaarthAI can help your business grow with purposeful AI.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name *</label>
              <input id="firstName" name="firstName" type="text" required className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name *</label>
              <input id="lastName" name="lastName" type="text" required className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Work Email *</label>
              <input id="email" name="email" type="email" required className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="usecase">Which use case would you like to discuss? *</label>
            <select id="usecase" name="usecase" required className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none">
              <option value="">Select an option</option>
              <option>Improve Sales Processes</option>
              <option>Improve Support Process</option>
              <option>Improve Website Experience</option>
              <option>Other</option>
            </select>
            <ValidationError prefix="Use Case" field="usecase" errors={state.errors} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="linkedin">LinkedIn URL</label>
            <input id="linkedin" name="linkedin" type="url" className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="demoDetails">Do you need us to demonstrate something specific in demo?</label>
            <textarea id="demoDetails" name="demoDetails" rows={3} className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary outline-none" />
            <ValidationError prefix="Demo Details" field="demoDetails" errors={state.errors} />
          </div>
          <div className="flex items-center">
            <input id="consent" name="consent" type="checkbox" required className="mr-2" />
            <span className="text-sm">I agree to SaarthAI's Privacy Policy and to SaarthAI contacting me for sales.</span>
            <ValidationError prefix="Consent" field="consent" errors={state.errors} />
          </div>
          <button type="submit" disabled={state.submitting} className="w-full py-3 rounded bg-primary text-white font-semibold text-lg shadow hover:bg-orange-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetDemo; 