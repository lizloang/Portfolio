import Project from "./Project";

export default function Projects() {
  return (
    <div className="my-10 flex flex-col items-center gap-10 md:my-28">
      <h1 className="text-dynamic-xlg">Projects</h1>
      <Project
        img={"/BQ.png"}
        title={"Burger Queen"}
        description={
          "A restaurant management application  for different roles, including admin, waiter, and chef, to control access to various features."
        }
        tools={["React", "React Router", "Jest", "Fetch"]}
        link={"https://cdmx-013-burger-queen-api-client-sigma.vercel.app/"}
      />
      <Project
        img={"/MD.png"}
        title={"MD-Links"}
        description={
          "Command-line interface (CLI) and library to examine Markdown files, generate statistics, and validate links found within them using HTTP requests, resulting in a highly functional and useful tool for developers."
        }
        tools={["Node.js", "JavaScript", "Jest", "Axios"]}
        link={"https://github.com/lizloang/CDMX013-md-links"}
      />
      <Project
        img={"/GP.png"}
        title={"Gym Partners"}
        description={
          "Social Network that allows users to create, edit, delete, and like posts after logging in or signing up."
        }
        tools={["JavaScript", "Firebase", "Axios"]}
        link={"https://gympartners-4a720.web.app/home"}
      />
      <Project
        img={"/RM.png"}
        title={"Rick and Morty Wiki"}
        description={
          "Web application that allows filtering, sorting, and displaying statistics about characters from the Rick & Morty series."
        }
        tools={["JavaScript", "Jest", "Chart Js"]}
        link={"https://vanesadeneb.github.io/CDMX013-data-lovers/"}
      />
    </div>
  );
}
