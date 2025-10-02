import { useState, useEffect } from "react"
import "./App.css"

// Simple SVG placeholders for icons
const SteelFixingIcon = () => (
  <img
    src="/SteelFixingIcon.png"
    alt="Steel Fixing Icon"
    width={64}
    height={64}
  />
)

const FormworkIcon = () => (
  <img
    src="/FormWorkIcon.png"
    alt="Form Work Icon"
    width={64}
    height={64}
  />
)

const ConcretingIcon = () => (
  <img
    src="/ConcretingIcon.png"
    alt="Concreting Icon"
    width={64}
    height={64}
  />
)

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formMessage, setFormMessage] = useState("")

  const handleEnquireClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setFormMessage("")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Create mailto link with form data
    const subject = encodeURIComponent("Project Enquiry from " + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:paddy@psformworks.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    setFormMessage("Opening your email client...")
    event.target.reset()
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    // Cleanup event listeners
    return () => {
      navLinks.forEach((anchor) => {
        anchor.removeEventListener("click", (e) => {
          e.preventDefault()
        })
      })
    }
  }, [])

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">PS Formworks</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-right">
            <button className="enquire-btn" onClick={handleEnquireClick}>
              Enquire Now
            </button>
            <div className="social-icons-header">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                f
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                in
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <img src="/BackgroundNew.png" alt="Construction site" className="hero-image" />
          <div className="hero-text">
            <h1>Welcome to PS Formworks</h1>
          </div>
        </section>


        <section id="about" className="info-section">
          <h2>Your Trusted Partner in Concrete Formwork</h2>
          <p>
            PS Formworks is a reinforced concrete and formwork contractor with our main headquarters based in London.
            Founded by industry veterans, our highly qualified team has over 20 years' experience and know-how to ensure
            that your project runs smoothly. We provide a reliable service to customers across the UK.
          </p>
          <p>
            From small private construction projects to complex RC frame programmes, we specialise in reinforced
            concrete structures, providing formwork, steel fixing and concreting services. We provide a reliable service
            to meet the clients/contractors needs whether it be programme or productivity.
          </p>
        </section>

        <section id="services" className="services-section">
          <h2>Services We Provide</h2>
          <div className="services-grid">
            <div className="service-item">
              <SteelFixingIcon />
              <h3>STEEL FIXING</h3>
              <p>The PS Formworks team provide the experience to meet all your steel fixing requirements.</p>
            </div>
            <div className="service-item">
              <FormworkIcon />
              <h3>FORMWORK</h3>
              <p>
                PS Formworks provide all aspects of formwork from custom built on site, engineered formwork or slipform
                system.
              </p>
            </div>
            <div className="service-item">
              <ConcretingIcon />
              <h3>CONCRETING</h3>
              <p>
                As experienced concrete contractors, PS Formworks offer a full range of services providing experienced
                labour, plant, and materials.
              </p>
            </div>
          </div>
        </section>

        


        <section id="gallery" className="gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/Image14.jpg?width=300&height=300" alt="Gallery image 1" />
            </div>
            <div className="gallery-item">
              <img src="/Image2.jpg?width=300&height=300" alt="Gallery image 2" />
            </div>
            <div className="gallery-item">
              <img src="/Image6.jpg?width=400&height=300" alt="Gallery image 3" />
            </div>
            <div className="gallery-item">
              <img src="/Image3.jpg?width=400&height=300" alt="Gallery image 4" />
            </div>
            <div className="gallery-item">
              <img src="/Image7.jpg?width=400&height=300" alt="Gallery image 5" />
            </div>
            <div className="gallery-item">
              <img src="/Image8.jpg?width=400&height=300" alt="Gallery image 6" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">

              <div className="contact-item">
                <h3>Phone</h3>
                <p>07517636856</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>paddy@psformworks.com</p>
              </div>
              <div className="contact-item">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 7:00 AM - 6:00 PM
                  <br />
                  Saturday: 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  📘
                </a>
                <a href="#" className="social-icon instagram">
                  📷
                </a>
                <a href="#" className="social-icon linkedin">
                  💼
                </a>
                <a href="#" className="social-icon twitter">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>



      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Project Enquiry</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </form>
            {formMessage && <p className="form-status">{formMessage}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
