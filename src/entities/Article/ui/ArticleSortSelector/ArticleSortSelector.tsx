import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../index';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, order, onChangeSort, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Названию'),
        }, {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам'),
        },
    ], [t]);

    return (
        <div
            className={classNames(cls.ArticleSortSelector, {}, [className])}
        >
            <Select
                options={sortFieldOptions}
                label={t('Сортировка ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
