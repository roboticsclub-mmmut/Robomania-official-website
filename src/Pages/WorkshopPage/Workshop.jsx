import './WorkshopsStyle.css';
import img1 from '../../assets/images/workshop/bluetoothcar.jpg';
import img2 from '../../assets/images/workshop/monsterpro.jpg';
import NavMenu from '../../components/NavMenu/NavMenu';
import FooterBar from '../../components/FooterBar/FooterBar';

const WorkshopsPage = () => {
  return (
    <>
    <div className='workshop-bckg'>

        <NavMenu />
      <div className="workshopPage-container">
        <h1>Web-Development Workshops</h1>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/jgteldtj1MQ"
              title="YouTube workshop-leftcontent player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>HTML Classes</h3>
            <p>
             Our HTML classes cover the fundamentals of web development, including elements, attributes, forms, and semantic structure. Participants learn how to create structured web pages with proper formatting. Hands-on exercises help in understanding tags, hyperlinks, tables, and multimedia integration. This course lays the foundation for building interactive websites.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/4yXkEc5Jd0g"
              title="YouTube workshop-leftcontent player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>CSS Classes</h3>
            <p>
             Our CSS classes focus on styling web pages using properties like colors, fonts, layouts, and responsiveness. Participants learn CSS selectors, flexbox, grid, and animations to enhance the visual appeal of websites. Practical exercises ensure students master designing attractive, responsive, and user-friendly web pages for different screen sizes.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/xO9wP6FoDik"
              title="YouTube workshop-video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>Javascript Classes</h3>
            <p>
              Our JavaScript classes introduce dynamic and interactive web elements. Participants learn variables, functions, loops, DOM manipulation, and event handling. Advanced topics like ES6 features, asynchronous programming, and APIs are also covered. Hands-on projects ensure students gain practical experience in making web pages interactive and engaging.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/yWmRVsPA648"
              title="YouTube workshop-video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>Backend-PHP Classes </h3>
            <p>
              Our backend development and PHP classes cover server-side programming, database management, and dynamic web application development. Participants learn PHP syntax, form handling, MySQL connectivity, and user authentication. Additionally, topics like RESTful APIs, session management, and security practices ensure students gain hands-on experience in building robust, scalable web applications.
            </p>
          </div>
        </div>

        <h1>Circuitary Workshops</h1>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <img src={img1} className="embed-video" alt="bluetooth-car" />
          </div>
          <div className="workshop-rightcontent">
            <h3>Bluetooth Car Project</h3>
            <p>
             Our Bluetooth Car Project workshop teaches participants how to design and build a remote-controlled car using Bluetooth technology. Participants learn about circuit connections, motor drivers, Arduino programming, and smartphone app integration. This hands-on experience enhances their knowledge of IoT and embedded systems, fostering creativity and technical skills.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <img src={img2} className="embed-video" alt="monster" />
          </div>
          <div className="workshop-rightcontent">
            <h3>Monster Design</h3>
            <p>
              Our Monster Design workshop focuses on building unique, creative robotic structures with electronic circuits. Participants explore motor controls, sensor integration, and power management to design interactive robotic creatures. This session encourages innovation, problem-solving, and hands-on learning, making it perfect for those interested in electronics, robotics, and creative engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
    </>
  );
};

export default WorkshopsPage;
