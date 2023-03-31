import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import {
    articleDetailsPageRecommendationReducer,
} from '../../model/slices/articleDetailsPageRecommendationSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationReducer,
    comments: articleDetailsCommentsReducer,
});
