import React from 'react';
import * as S from './style';

type CategoryProps = {
  categories: string;
};

function Category({ categories }: CategoryProps): JSX.Element {
  return <S.Category className={categories}># {categories}</S.Category>;
}

export default Category;
