import React from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {
  ZIndex,
  FontSize,
  Opacity,
  Radius,
  Padding,
  Shadow,
  Colors,
  FontWeight,
} from 'framework/system/theme';
import GlobalStyles from 'framework/system/globalStyles';

import { LocaleComponent } from 'framework/components';

const theme: DefaultTheme = {
  colors: Colors,
  zIndex: ZIndex,
  fontSize: FontSize,
  opacity: Opacity,
  padding: Padding,
  radius: Radius,
  shadow: Shadow,
  fontWeight: FontWeight,
};

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LocaleComponent />
        <div className="App">
          <header className="App-header">
            <p>{t('EXAMPLE_TEXT')}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('LEARN_REACT')}
            </a>
          </header>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
