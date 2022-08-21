import React from 'react'
import Navigation from "./Navigation"
import { useForm, ValidationError } from '@formspree/react';


function About() {
    const [state, handleSubmit] = useForm("xnqleadb");




  return (
    <div>
        <Navigation />
        <div className="section-center">
            <h2>You can send the developer an message:</h2>
            <div className="grid2">
                
                            <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Your Email Address
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                    </form>
                
            </div>

        </div>
    </div>
  )
}

export default About