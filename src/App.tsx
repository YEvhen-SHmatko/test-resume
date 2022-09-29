/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { IData } from './types';
import * as mocks from './languages';
import { SkilComponent, ProjectsComponent, WorksComponent } from './components';
import Localization from './components/Localization/Localization';

const App: React.FC = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [currentLocale, setCurrentLocale] = React.useState('en');
  const [data, setData] = React.useState<IData | null>(null);

  React.useEffect(() => {
    const getData = async (): Promise<IData | null> => {
      if (currentLocale === 'en') return mocks.EN;
      if (currentLocale === 'ua') return mocks.ua;
      return null;
    };

    getData().then((data) => {
      setData(data);
    });
  }, [currentLocale]);

  if (!data) return null;

  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="select-locale">
            {isShow && (
              <Localization currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />
            )}
            <div
              style={{ width: 18, height: 18 }}
              onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
            />
          </div>
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
          <ProjectsComponent title={data.projects.title} list={data.projects.list} />
          <WorksComponent title={data.works.title} list={data.works.list} />
        </section>
      </main>
    </div>
  );
};

export default App;
