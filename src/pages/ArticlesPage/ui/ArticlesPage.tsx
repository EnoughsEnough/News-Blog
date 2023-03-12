import React from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
    const { t } = useTranslation('articles');

    return (
        <div>
            {t('Страница статей')}
        </div>
    );
};

export default ArticlesPage;
