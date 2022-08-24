import styled from 'styled-components/native';

interface SpacerProps {
  numberOfSpaces: number;
}

const RowSpacer =
  styled.View <
  SpacerProps >
  (({numberOfSpaces}) => ({
    width: numberOfSpaces * 4,
  }));
const ColumnSpacer =
  styled.View <
  SpacerProps >
  (({numberOfSpaces}) => ({
    height: numberOfSpaces * 4,
  }));

interface FlexSpacerProps {
  flex?: number;
}
const FlexSpacer =
  styled.View <
  FlexSpacerProps >
  (({flex}) => ({
    flex: flex || 1,
  }));

export const Spacer = {
  Flex: FlexSpacer,
  Row: RowSpacer,
  Column: ColumnSpacer,
};
