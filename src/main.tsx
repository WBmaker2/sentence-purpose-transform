import React from 'react';
import ReactDOM from 'react-dom/client';
import { SentencePurposeTransformApp } from './features/sentence-purpose-transform/SentencePurposeTransformApp';
import './styles/sentence-purpose-transform.css';

// 서버 없이 브라우저에서 결정적으로 실행되는 단일 진입점 (사양 6절)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SentencePurposeTransformApp />
  </React.StrictMode>
);
