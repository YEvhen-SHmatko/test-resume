import React from 'react';

import { IData } from './types';
import mockData from './mocks/yevhen';
import { SkilComponent, ProjectsComponent, WorksComponent } from './components';

const App: React.FC = () => {
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
        </section>
      </main>
    </div>
  );
};

export default App;
