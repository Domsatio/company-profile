import React from 'react';

type ListComponentProps = {
  data: any[]
  renderItem: (item: any, index: number) => React.ReactNode;
};

const ListComponent: React.FC<ListComponentProps> = (props) => {
  const { data = [], renderItem } = props;

  return (
    <React.Fragment>{data.map((item, index) => renderItem(item, index))}</React.Fragment>
  );
};

export default ListComponent;