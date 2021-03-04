import { createGlobalStyle } from "styled-components";
import { query } from "src/config/mediaQuery";

const GlobalClassesStyle = createGlobalStyle`
  .flex {
    display: flex;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .ai-center {
    align-items: center;
  }
  .jc-end {
    justify-content: flex-end;
  }
  .jc-center {
    justify-content: center;
  }
  .wrap {
    flex-wrap: wrap;
  }

  .pos-rel {
    position: relative;
  }
  .pos-abs {
    position: absolute;
  }

  .h-100 {
    height: 100%;
  }
  .w-100 {
    width: 100%;
  }

  .show-md {
    display: none;
  }

  @media ${query.md} {
    .show-md {
      display: initial;
    }
    .hide-md {
      display: none;
    }
  }
`;

export default GlobalClassesStyle;
