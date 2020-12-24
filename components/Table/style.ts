import styled from 'styled-components'
import sizes from '../../styles/media'

export const TableStyle = styled.table`
  color: #fff;
  background-color: #212529;
  width: 100%;

  && thead {
    display: none;
  }
  tr:nth-of-type(2n) {
    background-color: inherit;
  }
  tr td:first-child {
    background: #f0f0f0;
    font-weight: bold;
    font-size: 1.3em;
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
  }
  tbody td {
    display: block;
    text-align: center;
  }
  tbody td:before {
    content: attr(data-th);
    display: block;
    text-align: center;
  }

  td,
  th {
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
  }

  td {
    text-align: center;
  }

  @media ${sizes.md} {
    && thead {
      display: contents;
    }
    tr td:first-child {
      background: #212529;
    }

    tbody td {
      display: table-cell;
      text-align: center;
    }
  }
`

export const WrapperActions = styled.div`
  display: flex;
  justify-content: space-evenly;
`
