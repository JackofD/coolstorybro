import Head from 'next/head';
import React from 'react';
import MainLayout from '../components/mainLayout';
import Story from '../components/story/story';

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      {/* we probably want to use grid to lay these out - so story can take the space it needs */}
      <Story />
    </MainLayout>
  )
}
