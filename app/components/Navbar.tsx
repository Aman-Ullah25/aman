import Image from "next/image";

export default function NavBar(){
    return(
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title className="swipe">My Portfolio </title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n   body {\n            font-family: 'Roboto', sans-serif;\n        }\n  "
    }}
  />
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="hover:underline" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main className="container mx-auto p-4">
    <section className="my-8" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex">
        <Image
          alt="A detailed portrait of me"
          className="rounded-full mr-4"
          height={150}
          src={require('../components/project/WhatsApp Image 2024-11-09 at 6.12.09 AM.jpeg')}
          width={150}
        />
        <p className="text-lg rounded border border-black circle-300 bg-blue-400 text-center inlineblock p-10"  >
        Asalam ale Kum !
        <br />
        👋 I'm Aman Ullah Qureshi, a Second-year Biomedical Engineering student at NED University. I'm passionate about merging technology and healthcare to tackle real-world challenges. Alongside my studies, I'm enrolled in a course with the Governor of Sindh 🏛️, gaining unique insights and growth opportunities. I also enjoy tutoring 📚, which allows me to deepen my knowledge while helping others succeed. Currently, I’m building my skills in web development 💻, learning TypeScript, CSS, HTML, and Next.js. I’m excited to explore and innovate, especially in areas like medical imaging and orthopedic engineering 🩻.
        </p>
      </div>
    </section>
    <section className="my-8" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        <div className="bg-white p-4 rounded shadow">
          <Image
            alt="Screenshot of Project 2"
            className="mb-4"
            height={200}
            src={require('../components/project/WhatsApp Image 2024-11-09 at 4.51.17 AM.jpeg')}
            width={300}
          />
          <h3 className="text-xl font-bold">Calculator</h3>
          <p className="text-gray-700">Project involves building a calculator using TypeScript, focusing on precision, efficiency, and an improved user interface. TypeScript, with its strict type-checking, helps prevent errors by enforcing data types, making the calculator more reliable. By leveraging TypeScript’s object-oriented capabilities, you can implement modular code that is easy to maintain and expand, allowing for features like basic arithmetic operations, memory storage, and error handling for invalid inputs. Additionally, TypeScript’s compatibility with modern frameworks enables a responsive and interactive design, enhancing user experience across various devices. This project not only strengthens your TypeScript skills but also serves as a practical tool demonstrating real-world applications of coding and user interface design.</p>
          <a href="https://github.com/Aman-Ullah25/CALCULATOR" ><h1 className="text-xl font-bold text-blue-700"> GITHUB LINK !!</h1></a>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <Image
            alt="Screenshot of Project 3"
            className="mb-4"
            height={200}
            src={require('../components/project/WhatsApp Image 2024-11-09 at 4.50.48 AM.jpeg')}
            width={300}
          />
          <h3 className="text-xl font-bold">Project 3</h3>
          <p className="text-gray-700">Project is a ticket counter system designed for efficient visitor management in a park. This system helps streamline the entry process by recording visitor details, generating tickets, and potentially categorizing tickets for various age groups or entry types, like family passes or senior discounts. Implementing this ticket counter allows the park to monitor attendance, track visitor flow, and maintain revenue records more effectively. Additionally, the system can include features like ticket validation, peak hour tracking, and data analytics to improve park operations and provide insights into visitor behavior.</p>
          <a href="https://github.com/Aman-Ullah25/TICKET-COUNTER" ><h1 className="text-xl font-bold text-blue-700"> GITHUB LINK !!</h1></a>
        </div>
      </div>
    </section>
    <section className="my-8" id="experience">
      <h2 className="text-3xl font-bold mb-4">Academic Experience</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <h3 className="text-xl font-bold">Matriculation</h3>
          <p className="text-gray-700">Gulistan Shah Abdul latif Boys Secondary School, 2021</p>
        </li>
        <li className="mb-2">
          <h3 className="text-xl font-bold">Intermediate</h3>
          <p className="text-gray-700">PECHS Education Foundation Government Degree Science College, 2023</p>
        </li>
        <li className="mb-2">
          <h3 className="text-xl font-bold">Graduation</h3>
          <p className="text-gray-700">NED University Of Engineering And Technology, 2023-2027</p>
        </li>
      </ul>
    </section>
    <section className="my-8" id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">HTML</h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  70%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">CSS </h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  70%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Typescript</h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                  90%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="my-8" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
      <form className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="message"
            defaultValue={""}
          />
        </div>
        <button className="bg-blue-600 text-white p-2 rounded" type="submit">
          Send
        </button>
      </form>
      <div className="mt-8">
     <h3 className="text-2xl font-bold mb-4">
      Connect with me
     </h3>
     <div className="flex space-x-4">
     
      <a className="text-blue-600 hover:text-blue-800" href="https://www.linkedin.com/in/amanullah-qureshi-3a664421b/" target="_blank">
       <i className="fab fa-linkedin fa-2x">
       </i>
      </a>
      <a className="text-blue-600 hover:text-blue-800" href="https://github.com/Aman-Ullah25" target="_blank">
       <i className="fab fa-github fa-2x">
       </i>
      </a>
      <a className="text-blue-600 hover:text-blue-800" href="https://www.facebook.com/amaanullah.qureshi.7" target="_blank">
       <i className="fab fa-facebook fa-2x">
       </i>
      </a>
      <a className="text-blue-600 hover:text-blue-800" href="https://www.instagram.com/amaanullahqureshi/" target="_blank">
       <i className="fab fa-instagram fa-2x">
       </i>
      </a>
      <a className="text-blue-600 hover:text-blue-800" href="https://wa.me/qr/L7SYS3NBHXT7L1" target="_blank">
       <i className="fab fa-whatsapp fa-2x">
       </i>
      </a>
     </div>
    </div>
    </section>

  </main>
  <footer className="bg-blue-600 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>© 2023 My Portfolio. All rights reserved.</p>
    </div>
  </footer>
</>)
}
