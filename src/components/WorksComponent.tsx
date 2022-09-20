import React from 'react';

import { IWork } from '../types';

interface IProps {
  title: string;
  list: IWork[];
}

const WorksComponent: React.FC<IProps> = ({ title, list }) => {
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

export default WorksComponent;
