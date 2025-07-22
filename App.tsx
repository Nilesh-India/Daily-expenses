
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import HomeScreen from './components/screens/HomeScreen';
import LedgerScreen from './components/screens/LedgerScreen';
import AnalyserScreen from './components/screens/AnalyserScreen';
import BackupScreen from './components/screens/BackupScreen';
import AllExpensesScreen from './components/screens/AllExpensesScreen';
import Layout from './components/Layout';
import GuideScreen from './components/screens/GuideScreen';
import TermsScreen from './components/screens/TermsScreen';

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/source/:sourceId" element={<LedgerScreen />} />
            <Route path="/expenses" element={<AllExpensesScreen />} />
            <Route path="/analyser" element={<AnalyserScreen />} />
            <Route path="/backup" element={<BackupScreen />} />
            <Route path="/guide" element={<GuideScreen />} />
            <Route path="/terms" element={<TermsScreen />} />
          </Routes>
        </Layout>
      </HashRouter>
    </DataProvider>
  );
}

export default App;