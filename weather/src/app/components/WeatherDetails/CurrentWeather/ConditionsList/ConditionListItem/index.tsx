import styled from 'styled-components/macro';
import { IFullConditions, ValueOf } from 'types';

interface Props {
  name: ValueOf<IFullConditions>;
  data: ValueOf<IFullConditions>;
  Component?: any;
}

export function ConditionListItem(props: Props) {
  const { name, data, Component } = props;

  return (
    <ConditionListItemFrame>
      <ConditionListItemTitle>{name}</ConditionListItemTitle>
      <ConditionListItemData>
        {Component ? <Component data={data} /> : <p>{data}</p>}
      </ConditionListItemData>
    </ConditionListItemFrame>
  );
}

const ConditionListItemFrame = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 240px;
  height: 220px;
  text-align: center;
  -webkit-box-shadow: 3px 5px 7px -4px rgba(0, 0, 0, 0.57);
  box-shadow: 3px 5px 7px -4px rgba(0, 0, 0, 0.57);
`;
const ConditionListItemTitle = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
`;
const ConditionListItemData = styled.div``;
