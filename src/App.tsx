import React from "react";
import { Helmet } from "react-helmet";
import FreelanceWork from "./components/FreelanceWork";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sydney D. Enciso</title>
        <meta
          id='meta-description'
          name='description'
          content='Some description.'
        />
        <meta id='og-title' property='og:title' content='MyApp' />
        <meta id='og-image' property='og:image' content='path/to/image.jpg' />
      </Helmet>

      <section className='container'>
        <div className='header'>
          <img
            className='header__img'
            alt='header-banner'
            loading='lazy'
            src='https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/451840750_2831295983675238_1763656122553577553_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFRVZmgjyKrsRU2lIFYQ36XNvP_f8rGqjI28_9_ysaqMuBteTznEHMS1HyAX0Xc4z80P6ra_0Y4lLXb8Q8TTD5S&_nc_ohc=edQCw57Wb4EQ7kNvgGqQjZI&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AixEdNjR3W6zbvon1fuB3eC&oh=00_AYCwpnCJ-VS3PpgL-lYpV8NDuyu5O-xNtA3Ho-CXJv7ODg&oe=675C1D91'
          />
        </div>
        <div className='content-container'>
          <div className='profile'>
            <img
              className='profile__img'
              alt='profile'
              loading='lazy'
              src='https://media.licdn.com/dms/image/v2/D5635AQFfjzCpFBtE5Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1729120779286?e=1734314400&v=beta&t=cGfZ4mDC6LMYYkNgfscahONJ-Ks0kkIyWAQwyk47urI'
            />
            <div className='profile__info'>
              <h1 className='profile__info--name'>Sydney D. Enciso</h1>
              <span className='profile__info--description'>
                Previous Companies
              </span>
              <div className='profile__company--group'>
                <img
                  onClick={() =>
                    window.open("https://research.samsung.com/srph", "_blank")
                  }
                  title='Samsung Research & Development'
                  alt='samsung-logo'
                  loading='lazy'
                  src='https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$'
                />
                <img
                  onClick={() =>
                    window.open("https://singlife.com.ph/", "_blank")
                  }
                  title='Singlife Philippines'
                  alt='singlife-logo'
                  loading='lazy'
                  src='https://play-lh.googleusercontent.com/929IyF8o_m1nlycM1Wy-Uu34vl4X8aqfMcLN9Wjoil85Ao6zfge4l416GGBT5Msdelg'
                />
                <img
                  onClick={() =>
                    window.open("https://www.collaberadigital.com/", "_blank")
                  }
                  title='Collabera Digital'
                  alt='collabera-logo'
                  loading='lazy'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQOiujYP0MGgb3h5ExHZnGl25ryFKigyiJg&s'
                />

                <img
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/CHENVELBalikbayanBoxJPNPH/",
                      "_blank"
                    )
                  }
                  title='Chenvel Services Inc'
                  alt='chenvel-logo'
                  loading='lazy'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_OEKke6nG0p3g5C1-AALgNFtPdOduiu4Mg&s'
                />
                <img
                  onClick={() =>
                    window.open("https://petsureservices.com.ph/", "_blank")
                  }
                  title='Petsure Services Inc'
                  alt='petsure-logo'
                  loading='lazy'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuw7munY42233xJmNCTehBo7NrJNg0DK_RTA&s'
                />
                <img
                  onClick={() => window.open("https://psa.gov.ph/", "_blank")}
                  title='Philippine Statistics Authority'
                  alt='PSA-logo'
                  loading='lazy'
                  src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD1s21ML55b08z-QDtvS8GuQPXWlkU6LxhoVPT0evOLp_8iBY8YFGmnoaiUOjaxrzkx7U30aPMTRt9rcDBFwoOewEnVlFAbvkNY7A1CuaA3-d-FMUNLU-_yB8fMkd_dQjpoixX568092RvvywoUrd9tkN0pVVA8Z9GVUMZKpNY2t2AUoGCQLXZaOD9Ey6F/s800/psa-logo-ph-1.png'
                />
                <img
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/fadschoolformodeling/",
                      "_blank"
                    )
                  }
                  title='FAD Modeling Center'
                  alt='FAD-logo'
                  loading='lazy'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubacMJyxenF7ZE-LAQ-HEvkGHoKTksAt67Q&s'
                />
                <img
                  onClick={() =>
                    window.open("https://www.freelancer.com/", "_blank")
                  }
                  title='Freelancer'
                  alt='freelancer-logo'
                  loading='lazy'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClYe1kHtbUV-E2d7NuF2pdPxljtu4nlXutg&s'
                />
                <img
                  onClick={() =>
                    window.open("https://www.upwork.com/", "_blank")
                  }
                  title='Upwork'
                  alt='upwork-logo'
                  loading='lazy'
                  src='https://seeklogo.com/images/U/upwork-logo-38004EEA61-seeklogo.com.png'
                />
              </div>
            </div>
            <div className='profile__buttons'>
              <div
                className='button button-primary'
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/syd-enciso/",
                    "_blank"
                  )
                }
              >
                <i className='fa-brands fa-linkedin' />
                <span>LinkedIn</span>
              </div>
              <div
                className='button button-primary'
                onClick={() =>
                  window.open("https://github.com/zmackaroo", "_blank")
                }
              >
                <i className='fa-brands fa-github' />
                <span>GitHub</span>
              </div>
              <div
                className='button button-primary'
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1_fENS62AFhJGLJk6MJ9ik6CQCgjbcdJ0/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <i className='fa-solid fa-file' />
                <span>Resume</span>
              </div>
            </div>
          </div>
          <hr />
          <nav className='navigation'>
            <span className='navigation-item nav-active'>Experience</span>
            <span className='navigation-item'>Skills</span>
            <span className='navigation-item'>Works</span>
          </nav>
          <div className='navigation-content'>
            <FreelanceWork />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
