import React from 'react'
import messageIcon from '../assets/msg-icon.png'
import mailIcon from '../assets/mail-icon.png'
import phoneIcon from '../assets/phone-icon.png'
import locationIcon from '../assets/location-icon.png'
import WhiteArrow from '../assets/white-arrow.png'

// Contact component handling form submissions and displaying contact information
const Contact = () => {
    // State to manage form submission feedback
    const [result, setResult] = React.useState("")

    // Handler for form submission using Web3Forms API
    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)

        // Add API key for Web3Forms service
        formData.append("access_key", "5a21afe5-5d85-46f4-8fd4-8c45446bd54c")

        // Send form data to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        // Handle submission response and update UI
        if (data.success) {
            setResult("Form Submitted Successfully")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    return (
        // Main contact section container
        <div className='contact'>
            {/* Contact information column */}
            <div className="contactCol">
                <h3>Send us a message <img src={messageIcon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum. Dolorum, iure? Facilis eaque error unde corporis.</p>
                {/* Contact details list */}
                <ul>
                    <li><img src={mailIcon} alt="" /> Contact: nextcode.dev</li>
                    <li><img src={phoneIcon} alt="" /> +21 123-456-784</li>
                    <li><img src={locationIcon} alt="" /> 38 Maalta Ave, <br /> D4 GreenPoint</li>
                </ul>
            </div>
            {/* Contact form column */}
            <div className="contactCol">
                <form onSubmit={onSubmit}>
                    <label>Your name:</label>
                    <input type="text" name='name' placeholder='Enter your name:' required/>

                    <label>Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />

                    <label>Write your message here</label>
                    <textarea name="messgae" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>
                        Submit now <img src={WhiteArrow} alt="" style={{width: "20px"}}/>
                    </button>
                </form>
                {/* Form submission result message */}
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact