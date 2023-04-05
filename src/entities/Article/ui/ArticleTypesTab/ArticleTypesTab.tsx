import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useMemo,
} from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../index';

interface ArticleTypesTabProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypesTab = memo(({ className, value, onChangeType }: ArticleTypesTabProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
