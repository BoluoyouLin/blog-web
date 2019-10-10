import { createGlobalStyle } from 'styled-components'

export const GlobalStyleByIconfont = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 1445002 */
  src: url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.eot');
  src: url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.woff') format('woff'),
  url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1445002_mo6jif1rb5f.svg#iconfont') format('svg');
}

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

