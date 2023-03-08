import React from 'react';
import { ReportsStat } from 'components/Reports/ReportsStat/ReportsStat';
import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { WraperBg } from './ReportPage.styled';
import BgGrey from 'components/Backgrounds/BgGrey/BgGrey';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';

export function ReportPage() {
  return (
    <div style={{ position: 'relative' }}>
      <WraperBg>
        <ReportsNav />
        <ReportsStat />
      </WraperBg>
      <BgGrey />
      <BgCabbage />
    </div>
  );
}

export default ReportPage;
