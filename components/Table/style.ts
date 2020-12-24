import styled from 'styled-components'

export const TableStyle = styled.table`
  color: #fff;
  background-color: #212529;
  width: 100%;

  && td,
  th {
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
  }

  td {
    text-align: center;
  }
`

export const WrapperActions = styled.table`
  display: flex;
`
