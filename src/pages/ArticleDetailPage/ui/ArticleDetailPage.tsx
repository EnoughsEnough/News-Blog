import { useTranslation } from 'react-i18next';

const ArticleDetailPage = () => {
    const { t } = useTranslation('articlesDetail');

    return (
        <div>
            {t('Страница статьи')}
        </div>
    );
};

export default ArticleDetailPage;
