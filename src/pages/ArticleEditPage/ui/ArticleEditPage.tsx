import React from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArticleEditPage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();
    const isEdit = Boolean(id);
    return (
        <Page>
            {isEdit
                ? t('Страница статьи ID') + id
                : t('Создание новой статьи')}
        </Page>
    );
};

export default ArticleEditPage;
