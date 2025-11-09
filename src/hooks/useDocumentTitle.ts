import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Portfolio - Jerico MURRAY | ${title}`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};