import React from 'react';
import mockData from './mocks/yevhen';

interface ISkilItem {
  title: string;
  list: string[];
}

const SkilComponent: React.FC<ISkilItem> = ({ title, list }) => {
  return (
    <div className="skils">
      <h3 className="skils-title title">{title}</h3>
      <ul className="skils-list">
        {list.map((item) => (
          <li className="skils-item subtitle" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IProject {
  id: string;
  name: string;
  link: string;
}

interface IProjectsComponentProps {
  title: string;
  list: IProject[];
}

// const PROJECTS: IProject[] = [];

// for (let index = 0; index < new Array(5).length; index += 1) {
//   PROJECTS.push({ id: `${index}`, name: `Resume-v${index + 1}`, link: 'www.google.com' });
// }

const ProjectsComponent: React.FC<IProjectsComponentProps> = ({ title, list }) => {
  return (
    <div className="projects">
      <h4 className="projects-title title">{title}</h4>
      <ul className="projects-list">
        {list.map(({ id, name, link }) => {
          return (
            <li className="projects-item" key={`projects-${id}`}>
              <span className="projects-item_title subtitle">{name}</span>
              <div className="dotted" />
              <span className="projects-item_link subtitle">
                <a href={`//${link}`}>link</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface IWork {
  id: string;
  name: string;
  description: string;
}

interface IWorksComponentProps {
  title: string;
  list: IWork[];
}

// const WORKS: IWork[] = [];

// for (let index = 0; index < new Array(3).length; index += 1) {
//   WORKS.push({
//     id: `${index}`,
//     name: `work${index + 1}`,
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque minus alias in officiis quidem nostrum! Reiciendis natus molestias suscipit?',
//   });
// }

const WorksComponent: React.FC<IWorksComponentProps> = ({ title, list }) => {
  return (
    <div className="works">
      <h4 className="works-title title">{title}</h4>
      <ul className="works-list">
        {list.map(({ id, name, description }) => {
          return (
            <li className="works-item" key={`works-${id}`}>
              <h5 className="works-item_title subtitle">{name}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
interface IData {
  photo_link: string;
  skils: ISkilItem[];
  fio: string;
  description: string;
  projects: IProject[];
  works: IWork[];
}
const App: React.FC = () => {
  //   <script>
  //   const openBtn = document.getElementById("JS_OPEN_MODAL");
  //   const closeBtn = document.getElementById("JS_CLOSE_MODAL");
  //   const modalWrap = document.getElementById("JS_MODAL");

  //   const toggleModal = () => {
  //     modalWrap.classList.toggle("open-modal");
  //   };

  //   openBtn.onclick = toggleModal;
  //   closeBtn.onclick = toggleModal;
  // </script>
  const [data, setData] = React.useState<IData | null>(null);
  React.useEffect(() => {
    const getData = async (): Promise<IData> => {
      return mockData;
    };
    getData().then((data) => {
      setData(data);
    });
  }, []);
  if (!data) return null;
  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="photo">
            <img src={data.photo_link} alt="Leonardo_Dicaprio_Cannes_photo" />
          </div>
          {data.skils.map(({ title, list }) => (
            <SkilComponent key={title} title={title} list={list} />
          ))}
        </section>
        <section className="content">
          <h1 className="fio">{data.fio}</h1>
          <p className="description">{data.description}</p>
          <ProjectsComponent title="Projects" list={data.projects} />
          <WorksComponent title="History work" list={data.works} />
          {/*
          <button id="JS_OPEN_MODAL" type="button">
            open modal
          </button> */}
        </section>
      </main>

      {/* <div id="JS_MODAL" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">first modal</div>
            <div id="JS_CLOSE_MODAL">X</div>
          </div>
          <div style={{ width: 600 }} />
        </div>
      </div> */}
    </div>
  );
};

export default App;
