import "../styles/resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <header>
        <h1>Resume</h1>
        <h2>Kyle Sunday</h2>
        <p> Security Guard | Web Development</p>
        <p>Email: kyle.sunday@yahoo.com | Phone: (850) 982-5405</p>
      </header>
      <section className="summary">
        <h2>Summary</h2>
        <p>
          <strong>I have had multiple years of customer service, jobs in a variety of fields and management skills. </strong>
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>

        <div className="job">
          <h3>Security Officer</h3>
          <p>Allied Universal Security, Draper, Utah</p>
          <p> October2022 – Current</p>
          <ul className="list">
            <li>
            I have worked at a variety of sites with varying responsibilities, but my current responsibilities involve greeting people, directing deliveries, issuing temporary badges, inspecting vehicles, and maintaining a security gate.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Associate</h3>
          <p>Target, Sugarhouse, Utah</p>
          <p>July 2022 – October 2022</p>
          <ul className="list">
            <li>
            Inventory management, stocking merchandise, and unloading trucks of merchandise. I operate the cash register and provide customer service.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Delivery Driver</h3>
          <p>Bilbro Express, Salt Lake City, Utah</p>
          <p>February 2022 – July 2022</p>
          <ul className="list">
            <li>
            I loaded trucks for UPS and Delivered packages from place to place. In a timely and efficient manner.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Delivery Driver</h3>
          <p>Finish Line Logistics, Salt Lake City, Utah</p>
          <p>November 2021 – February 2022</p>
          <ul className="list">
            <li>
            I loaded trucks for Amazon and Delivered packages from place to place. In a timely and efficient manner.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Site Supervisor</h3>
          <p>CBI Security, Salt Lake City, Utah</p>
          <p>January 2021 – October 2021</p>
          <ul className="list">
            <li>
            My responsibilities included making schedules, patrolling the building, maintaining hourly DARs, escorting guests between floors, and providing security for concerts for the Eccles Theatre.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Associate / Cashier</h3>
          <p>Taco Time, Centerville, Utah</p>
          <p>May 2020 – December 2020</p>
          <ul className="list">
            <li>
            I made tacos, provided general customer service and operated the cash register.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Overnight Stower / Puller</h3>
          <p>Amazon DUT1, West Valley, Utah</p>
          <p>March 2020 – May 2020</p>
          <ul className="list">
            <li>
            Stowing boxes in bags, and then moving those fully loaded bags to a zone to be loaded into trucks. Another duty assigned to me was to pull boxes of the line and put them on shelving units for stowers to stow.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Associate / Cashier</h3>
          <p>Mod Pizza, Bountiful, Utah</p>
          <p>December2019 – March 2020</p>
          <ul className="list">
            <li>
            I made pizza, folded boxes, ran the cash register, and took care of general cleaning dutie
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Temporary Remodel Associate</h3>
          <p>Walmart, Pensacola, Florida</p>
          <p>October 2019 – December 2019</p>
          <ul className="list">
            <li>
            I built and broke down shelving units, moved products around the shelves to their new locations and set up displays.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Overnight Driver</h3>
          <p>Dominos, Pensacola, Florida</p>
          <p>April 2019 – October 2019</p>
          <ul className="list">
            <li>
            I delivered pizzas, took care of cleaning and closing duties, as well as money management.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Stower / Problem Solver</h3>
          <p>Amazon SLC1, Salt Lake City, Utah</p>
          <p>August 2018 - December 2018</p>
          <ul className="list">
            <li>
            I stowed items into storage, processed and removed defective merchandise
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Cap 2 Associate</h3>
          <p>Walmart Supercenter, Centerville, Utah	</p>
          <p>April 2018 - July 2018</p>
          <ul className="list">
            <li>
            I stocked shelves in the store, and I unloaded trucks of merchandise
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Cap 2 and Cap 1 Associate</h3>
          <p>Walmart Supercenter, Riverton, Utah</p>
          <p>October 2016 - October 2017</p>
          <ul className="list">
            <li>
            Inventory management, stocking merchandise, and unloading trucks of merchandise
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Cashier</h3>
          <p>Raceway Gas Station, Milton, Florida</p>
          <p>June 2016 - September 2016</p>
          <ul className="list">
            <li>
            Stocking the gas station shelves, changing gas prices on the billboard, and running the cash register and provided general customer service
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Fry Cook/ Cashier</h3>
          <p>Philly's Cheesesteaks & Hoagies, Pensacola, Florida</p>
          <p>March 2016 - June 2016</p>
          <ul className="list">
            <li>
            Prepared both hot and cold sandwiches, took customer's order, operated fryers, provided general maintenance and janitorial duties for the store.
            </li>
          </ul>
        </div> 
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Cottonwood Highschool Graduated - May 2013</h3>
          <p>High School Diploma</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Responsive Design</li>
          <li>Version Control (Git)</li>
        </ul>
      </section>

      <a
        href="/../../../Public/assets/my-resume.pdf"
        download
        className="resume-link"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;