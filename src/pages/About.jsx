import "../css/About.css"
import pfp from "../assets/pfp.webp"

export default function About() {
  return (
      <main id="component-wrapper">
        <div className="title-wrapper">
          <h2>ABOUT</h2>
          <hr />
          </div>
          <div className="about-content">
            <div className="about-content-heading-wrapper">
            <img className="about-content-heading-img" src={pfp} draggable="false"/>
            <div className="about-content-heading">
              <h3>Jordan Schulte</h3>
              <p>I born and raised in Buffalo, NY. I was born in 2003
            and always had an interest in websites and how they were built. When I&apos;m not working or doing development, I&apos;m hanging out with the fam, watching football and rooting for the Bills!</p>
            </div>
            </div>
            <div className="about-work title-wrapper">
              <h2>Work History</h2>
              <hr />
            </div>
            <div className="work-card-wrapper">
              <div className="work-card">
                <div className="work-card-title">
                  <h3>New York Marketing</h3>
                  <p className="work-card-date"><span className="work-card-label">Date:</span> August 2022 - Current</p>
                </div>
                <div className="work-card-body">
                  <span className="work-card-label">Role:</span>
                  <ul className="work-card-role-list">
                    <li className="work-card-role-item">Managing and creating Wordpress sites for new and existing clients.</li>
                    <li className="work-card-role-item">Managed over 120+ client sites ranging from e-commerce, directories and businesses. See a sample of sites I created and managed below!</li>
                      <ul className="work-card-role-sub-list">
                        <li><a className="link-w" href="https://newyorkglobalmarketingsolutions.com/" target="_blank" rel="noreferrer">New York Marketing</a> &#40;Updated & Maintained&#41;</li>
                        <li><a className="link-w" href="https://bornbuffalo.com/" target="_blank" rel="noreferrer">Born Buffalo</a> &#40;Created & Designed from scratch&#41;</li>
                        <li><a className="link-w" href="https://celebluxury.com/" target="_blank" rel="noreferrer">Celeb Luxury</a> &#40;Updated & Maintained&#41;</li>
                        <li><a className="link-w" href="https://nofadefresh.com/" target="_blank" rel="noreferrer">No Fade Fresh</a> &#40;Updated & Maintained&#41;</li>
                        <li><a className="link-w" href="https://pawpalslakenona.com/" target="_blank" rel="noreferrer">PawPals Lake Nona</a> &#40;Created & Designed from scratch&#41;</li>
                        <li><a className="link-w" href="https://titansroofing.com/" target="_blank" rel="noreferrer">Titans Roofing</a> &#40;Created & Designed from scratch&#41;</li>
                        <li><a className="link-w" href="https://1818bargrill.com/" target="_blank" rel="noreferrer">1818 Bar & Grill</a> &#40;Created & Designed from scratch&#41;</li>
                        <li>and much more...</li>
                      </ul>
                    <li className="work-card-role-item">Wrote and produced blogs for multiple clients.</li>
                    <li className="work-card-role-item">Worked a lot with Google sheets.</li>
                  </ul>
                </div>
              </div>
              <div className="work-card">
                <div className="work-card-title">
                  <h3>Kay Jewelers</h3>
                  <p className="work-card-date"><span className="work-card-label">Date:</span> October 2021 - January 2022</p>
                </div>
                <div className="work-card-body">
                  <span className="work-card-label">Role:</span>
                  <ul className="work-card-role-list">
                    <li className="work-card-role-item">Helped guests find the jewelery pieces they were looking for.</li>
                    <li className="work-card-role-item">Did inspections and cleanings on clients pieces.</li>
                    <li className="work-card-role-item">Packaged jewelery and setup the jewelry displays.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </main>
  )
}
