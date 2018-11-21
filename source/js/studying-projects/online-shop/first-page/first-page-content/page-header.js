import React from 'react';
import PageHeaderUpper from '../../components/PageHeaderUpper';
import PageHeaderLower from '../../components/PageHeaderLower';

const navNames = ['Home', 'Galleries', 'Categories', 'Pages'];

export function PageHeader() {
  return (
    <header className='page-header'>
      <PageHeaderUpper />
      <PageHeaderLower navNames={navNames} />
    </header>
  )
}