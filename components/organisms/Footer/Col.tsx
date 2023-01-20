/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

interface ColProps {
  headerText: string;
  items: any;
}

interface itemInterface {
  id: number;
  text: string;
  href: string;
}

export default function Col(props: ColProps) {
  const { headerText, items } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <ListHeader text={headerText} />
      <ul className="list-unstyled">
        {
          items.map((item: itemInterface) => (<ListItem key={item.id} {...item} />))
        }
      </ul>
    </div>
  );
}
