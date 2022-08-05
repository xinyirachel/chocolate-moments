import React from 'react'
import Navigation from "./Navigation"
import { useForm, ValidationError } from '@formspree/react';


function About() {
    const [state, handleSubmit] = useForm("xnqleadb");




  return (
    <div>
        <Navigation />
        <div className="section-center">
            <h2>About this app</h2>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius urna at nulla commodo, id bibendum ante pretium. In hac habitasse platea dictumst. In scelerisque ante lacus, aliquam dapibus sapien vehicula a. Duis tincidunt pharetra diam vel suscipit. Mauris dignissim metus nec pharetra sollicitudin.
            </div>
            <p>You can send the developer an message:</p>
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