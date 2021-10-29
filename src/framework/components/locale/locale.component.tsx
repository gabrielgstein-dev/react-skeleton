import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, Button } from 'framework/atoms';
import { i18nLanguages } from 'access/i18n/contracts';

import { Container } from './locale.style';
import { changeLocale } from './locale.logic';

const locale: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <Container>
      <Button onClick={() => i18n.changeLanguage(i18nLanguages.ENGLISH)}>
        <Text>English</Text>
      </Button>

      <Button onClick={() => i18n.changeLanguage(i18nLanguages.PORTUGUESE)}>
        <Text>Português</Text>
      </Button>
    </Container>
  );
};

export default locale;
